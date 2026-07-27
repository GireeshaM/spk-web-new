import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine, isMainModule } from '@angular/ssr/node';
import express, { type Request, type Response } from 'express';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import bootstrap from './main.server';

const serverDistFolder = dirname(fileURLToPath(import.meta.url));
const browserDistFolder = resolve(serverDistFolder, '../browser');
const indexHtml = join(serverDistFolder, 'index.server.html');

const app = express();
const commonEngine = new CommonEngine();

type LegacyRedirect = {
  source: string;
  target: string | ((req: Request) => string);
  preserveQuery?: boolean;
};

const legacyRedirects: LegacyRedirect[] = [
  { source: '/home', target: '/' },
  { source: '/it-consulting', target: '/services/it-consulting' },
  { source: '/staffing', target: '/services/staffing' },
  { source: '/project-management', target: '/services/project-management' },
  { source: '/software-service', target: '/services/software-service' },
  { source: '/it-assess', target: '/services/it-consulting' },
  { source: '/it-infra', target: '/services/it-consulting' },
  { source: '/staffingSolutions', target: '/services/staffing' },
  {
    source: '/itAndTelecommunications',
    target: '/industries/it-and-telecommunications',
  },
  {
    source: '/itTelecommunications',
    target: '/industries/it-and-telecommunications',
  },
  {
    source: '/healthCareAndLifeSciences',
    target: '/industries/healthcare-life-sciences',
  },
  {
    source: '/transportationAndLogistics',
    target: '/industries/transportation-logistics',
  },
  { source: '/government', target: '/industries/government' },
  { source: '/manufacturing', target: '/industries/manufacturing' },
  { source: '/education', target: '/industries/education' },
  { source: '/banking', target: '/industries/banking' },
  {
    source: '/telecommunication/:section',
    target: (req) =>
      `/industries/it-and-telecommunications/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/government/:section',
    target: (req) =>
      `/industries/government/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/transport/:section',
    target: (req) =>
      `/industries/transportation-logistics/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/healthcare/:section',
    target: (req) =>
      `/industries/healthcare-life-sciences/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/banking/:section',
    target: (req) =>
      `/industries/banking/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/education/:section',
    target: (req) =>
      `/industries/education/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/manufacturing/:section',
    target: (req) =>
      `/industries/manufacturing/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/industries/transportation-and-logistics',
    target: '/industries/transportation-logistics',
  },
  {
    source: '/industries/transportation-and-logistics/:section',
    target: (req) =>
      `/industries/transportation-logistics/${encodePathSegment(req.params['section'])}`,
  },
  {
    source: '/networkEngineering',
    target: '/industries/transportation-logistics/networkEngineering',
  },
  {
    source: '/insightsBlog',
    target: (req) => `/insights/${getLegacyInsightSection(req)}`,
    preserveQuery: false,
  },
  { source: '/java', target: '/careers' },
];

legacyRedirects.forEach(({ source, target, preserveQuery }) => {
  app.get(source, (req, res) => {
    redirectPermanently(req, res, target, preserveQuery);
  });
});

function redirectPermanently(
  req: Request,
  res: Response,
  target: LegacyRedirect['target'],
  preserveQuery = true,
): void {
  const targetPath = typeof target === 'function' ? target(req) : target;
  const queryString = preserveQuery ? req.originalUrl.split('?')[1] : '';

  res.redirect(301, `${targetPath}${queryString ? `?${queryString}` : ''}`);
}

function encodePathSegment(section = ''): string {
  return encodeURIComponent(section);
}

function getLegacyInsightSection(req: Request): string {
  const section = req.query['section'];
  const sectionValue = Array.isArray(section) ? section[0] : section;

  if (
    sectionValue === 'exploringThePotentialOfSalesforceAnalyticsCloud' ||
    sectionValue === 'marketing'
  ) {
    return sectionValue === 'marketing'
      ? 'marketing-excellence'
      : 'exploringThePotentialOfSalesforceAnalyticsCloud';
  }

  return typeof sectionValue === 'string' && sectionValue
    ? encodePathSegment(sectionValue)
    : 'marketing-excellence';
}

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/**', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.get(
  '**',
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.get('**', (req, res, next) => {
  const { protocol, originalUrl, baseUrl, headers } = req;

  commonEngine
    .render({
      bootstrap,
      documentFilePath: indexHtml,
      url: `${protocol}://${headers.host}${originalUrl}`,
      publicPath: browserDistFolder,
      providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
    })
    .then((html) => res.send(html))
    .catch((err) => next(err));
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, () => {
    //  console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

export default app;
