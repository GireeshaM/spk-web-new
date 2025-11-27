import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  
   heading: string = 'Our Product Suite';
  subtitle: string = 'Powerful solutions designed to transform your business';
 
  leftPhoto: string = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800';
  rightScreenshot: string = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800';
 
  // Interior design images
  interiorImages = {
    image1: 'https://i.pinimg.com/1200x/b0/0d/8b/b00d8bef45550c2ac16a11ca7915da92.jpg',
    image2: 'https://i.pinimg.com/1200x/54/6a/de/546ade663993bd0dc6f09f0efd9f92d3.jpg',
    image3: 'https://i.pinimg.com/736x/2b/65/0c/2b650cd34187329b32d94de795c52118.jpg',
    image4: 'https://i.pinimg.com/736x/6d/43/76/6d4376d511763b53a823f5ddac2456dc.jpg'
  };
 
  // LMS images
  lmsImages = {
    image1: 'https://miro.medium.com/1*k3OU519iKbNHycQXdiRraw.jpeg',
    image2: 'https://www.maplelms.com/wp-content/uploads/2021/08/Beige-Green-and-Pink-Blob-Organic-Sale-Quick-Create-Facebook-Cover-1.png',
    image3: 'https://www.frontendmatter.com/images/preview/01_learnplus.png',
    image4: 'https://static.wixstatic.com/media/0d3339_b28269831ea0488c8dccc1581275dd21~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/0d3339_b28269831ea0488c8dccc1581275dd21~mv2.png'
  };
 
  // Features data
  interiorFeatures = [
    'Direct Client–Designer Interaction',
    'Simple Online Project Request Submission',
    'Synchronized Communication Across Teams',
    'Residential, Commercial & Layout Projects',
    'Unified Dashboard for Tracking Progress'
  ];
 
  rackFeatures = [
    'Rapid Rack Scanning',
    'Hardware Inventory',
    'Cable Mapping',
    'Visual Cable Paths',
    'AI Validation',
    'Auto Reports'
  ];
 
  lmsFeatures = [
    'Personalized Experience',
    'Learning Goals',
    'Course Creation',
    'Personalized Dashboard',
    'Progress Tracking'
  ];
 
  securityFeatures = [
    'Intelligent AI-Based Threat Detection',
    'Real-Time Vulnerability Fixes',
    'Automated One-Click Resolution',
    'Multi-Technology Support',
    'Repository-Integrated Scanning',
    'Continuous Secure Code Practices'
  ];
 
  onStartTrial(): void {
    console.log('Start trial clicked');
    // Add your logic here
  }
 
  // Easter egg! 🎉
  private konamiCode: string[] = [];
  private konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
 
  constructor() {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', (e) => this.handleKonami(e));
    }
  }
 
  private handleKonami(event: KeyboardEvent): void {
    this.konamiCode.push(event.key);
    this.konamiCode.splice(-this.konamiSequence.length - 1, this.konamiCode.length - this.konamiSequence.length);
 
    if (this.konamiCode.join('').includes(this.konamiSequence.join(''))) {
      this.activateEasterEgg();
      this.konamiCode = [];
    }
  }
 
  private activateEasterEgg(): void {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
      }
      * { animation: rainbow 3s linear infinite !important; }
    `;
    document.head.appendChild(style);
   
    alert('🎮 KONAMI CODE ACTIVATED! 🌈\n\nYou found the secret! The dev team salutes you! 🎉');
   
    setTimeout(() => style.remove(), 10000);
  }
}
