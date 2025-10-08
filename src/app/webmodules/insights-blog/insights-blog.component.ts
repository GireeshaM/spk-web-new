import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insights-blog',
  imports: [CommonModule],
  templateUrl: './insights-blog.component.html',
  styleUrls: ['./insights-blog.component.scss'],
})
export class InsightsBlogComponent implements OnInit {
  public currentSection: string = '';
  route = inject(ActivatedRoute);

  public ngOnInit(): void {
    // Get the route param 'section'
    this.route.paramMap.subscribe((params) => {
      this.currentSection = params.get('section') || 'marketing';
    });
  }
}
