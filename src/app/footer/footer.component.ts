import { NgStyle } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs/operators';
import { CookieConsentService } from '../services/cookie-consent.service';

@Component({
  selector: 'app-footer',
  imports: [NgStyle, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements OnInit {
  @Input() themeColor: string = '#ffff';
  route = inject(ActivatedRoute);
  router = inject(Router);
  private readonly cookieConsentService = inject(CookieConsentService);

  public ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        let child = this.route.firstChild;
        while (child?.firstChild) {
          child = child.firstChild;
        }
        this.themeColor = child?.snapshot.data['footerColor'] || '#ffffff';
      });
  }

  public openCookieSettings(): void {
    this.cookieConsentService.openPreferencesDialog();
  }
}
