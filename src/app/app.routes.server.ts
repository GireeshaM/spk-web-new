import { RenderMode, ServerRoute } from '@angular/ssr';

const telecomSections = [
  'dataPrivacy',
  'automation',
  'infrastructure',
  'managedSolutions',
];

const governmentSections = [
  'StrategicRiskAndResilence',
  'SmartItManagedsolutions',
  'ProjectManagementExcellence',
  'DataAnalytics',
  'TrustedTransformationPartner',
  'CitizenEngagementTransparency',
];

const healthcareSections = [
  'intelligentinnovation',
  'connectedInfrastructure',
  'dataSecurity',
  'projectDelivery',
  'talentSolutions',
  'patientInnovation',
];

const manufacturingSections = [
  'salesforceIntegration',
  'dataAnalytics',
  'projectManagement',
  'ITConsulting',
];

const educationSections = [
  'networkingEngineering',
  'educationProjectManagement',
  'dataAnalyticsEducation',
];

const transportationSections = [
  'itConsulting',
  'networkEngineering',
  'salesforceAI',
];

const bankingSections = ['big-data', 'cybersecurity', 'project-management', 'ai'];
const productIds = ['interior-living', 'smart-rack', 'lms', 'code-detector'];
const jobIds = [
  'HR-001',
  'FSD-001',
  'SF-001',
  'AI-001',
  'FSD-002',
  'BSR-001',
  'AI-002',
];
const insightSections = [
  'marketing-excellence',
  'automate-your-business-flowBuilder',
  'salesforce-health-cloud',
  'exploringThePotentialOfSalesforceAnalyticsCloud',
  'empoweringSmallBusinesses',
  'exposingTheTemptingBenefitsOfChoosingSalesforceCustomization',
];

const sectionParams = (sections: string[]) =>
  Promise.resolve(sections.map((section) => ({ section })));

export const serverRoutes: ServerRoute[] = [
  {
    path: 'telecommunication/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'government/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'transport/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'healthcare/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'banking/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'education/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'manufacturing/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'industries/transportation-and-logistics/:section',
    renderMode: RenderMode.Client,
  },
  {
    path: 'industries/it-and-telecommunications/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(telecomSections),
  },
  {
    path: 'industries/government/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(governmentSections),
  },
  {
    path: 'industries/healthcare-life-sciences/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(healthcareSections),
  },
  {
    path: 'industries/manufacturing/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(manufacturingSections),
  },
  {
    path: 'industries/education/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(educationSections),
  },
  {
    path: 'industries/transportation-logistics/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(transportationSections),
  },
  {
    path: 'industries/banking/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(bankingSections),
  },
  {
    path: 'job-summary/:jobId',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () =>
      Promise.resolve(jobIds.map((jobId) => ({ jobId }))),
  },
  {
    path: 'insights/:section',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () => sectionParams(insightSections),
  },
  {
    path: 'products/:id',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: () =>
      Promise.resolve(productIds.map((id) => ({ id }))),
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
