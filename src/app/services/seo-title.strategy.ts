import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  TitleStrategy,
} from '@angular/router';
import { SeoService } from './seo.service';

@Injectable()
export class SeoTitleStrategy extends TitleStrategy {
  private readonly seoService = inject(SeoService);

  public override updateTitle(snapshot: RouterStateSnapshot): void {
    const title =
      this.getRouteDataValue(snapshot.root, 'title') ??
      this.seoService.defaultMeta.title;
    const description =
      this.getRouteDataValue(snapshot.root, 'description') ??
      this.seoService.defaultMeta.description;

    this.seoService.updateMeta(title, description);
  }

  private getRouteDataValue(
    route: ActivatedRouteSnapshot,
    key: string,
  ): string | undefined {
    let value: string | undefined;
    let currentRoute: ActivatedRouteSnapshot | null = route;

    while (currentRoute) {
      const routeValue = currentRoute.data[key];
      if (typeof routeValue === 'string' && routeValue.trim()) {
        value = routeValue;
      }

      currentRoute =
        currentRoute.children.find((child) => child.outlet === 'primary') ??
        currentRoute.firstChild;
    }

    return value;
  }
}
