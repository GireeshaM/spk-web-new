import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

interface LegalPageData {
  title: string;
  intro: string;
  isPlaceholder?: boolean;
  sections: Array<{
    heading: string;
    body: string;
    items?: string[];
    contactLines?: string[];
  }>;
}

@Component({
  selector: 'app-legal-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './legal-page.component.html',
  styleUrl: './legal-page.component.scss',
})
export class LegalPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);

  public page: LegalPageData = {
    title: '',
    intro: '',
    sections: [],
  };

  public ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.page = data['legalPage'] as LegalPageData;
    });
  }
}
