import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insights-blog',
  imports: [CommonModule],
  templateUrl: './insights-blog.component.html',
  styleUrls: ['./insights-blog.component.scss']
})
export class InsightsBlogComponent {
  currentSection: string = ''; // Default section

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the route param 'section'
    this.route.paramMap.subscribe(params => {
      this.currentSection = params.get('section') || 'marketing';
    });
  }
}
