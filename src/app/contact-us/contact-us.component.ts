import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MainHeroSectionComponent } from '../webmodules/utilities/main-hero-section/main-hero-section.component';
 
@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,ReactiveFormsModule,MainHeroSectionComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
 // Section 1
  public whatMainHeader = 'Get in touch with SprintPark';
  public whatDescription =
    'We’re here to answer your questions, support your journey, and help you move forward faster.';
  public heroImage = 'assets/contactus/contactUsHero.png';
  public smallImage = 'assets/contactus/contactUsHero.png';
//section 2 Contact form
  contactForm: FormGroup;
 locations = [
    {
      type: 'usa',
      title: 'USA Location :',
      address: '85 Felt Rd, Suite #604, South Windsor, CT 06074',
      phone: '+1 (860) 566 9894',
      email: 'info@sprintpark.com'
    },
    {
      type: 'india',
      title: 'India Location :',
      address: 'Unit No. 1204,12th Floor,B Block,Asian Suncity, Kondapur, Hyderabad, Telangana 500084',
      phone: '+1 (860) 566 9894',
      email: 'hr@sprintpark.com'
    }
  ];
   onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }
   constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }
  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }
   getFormControlError(controlName: string): string | null {
    const control = this.contactForm.get(controlName);
    if (control?.errors && control.touched) {
      if (control.errors['required']) {
        return `${controlName} is required`;
      }
      if (control.errors['email']) {
        return 'Please enter a valid email';
      }
    }
    return null;
  }
  // Section 3- Social Links
  socialLinks = [
      { name: 'LinkedIn', icon: 'assets/contactus/linkedin.png', url: '#' },
      { name: 'X (Twitter)', icon: 'assets/contactus/twitter.png', url: '#' },
      { name: 'YouTube', icon: 'assets/contactus/youtube.png', url: '#' },
      { name: 'Facebook', icon: 'assets/contactus/facebook.png', url: '#' },
      { name: 'Instagram', icon: 'assets/contactus/instagram.png', url: '#' },
      { name: 'Glassdoor', icon: 'assets/contactus/glassdoor.png', url: '#' }
    ];
  // Section 4- FAQ
    faqItems = [
      {
        question: 'What services does your company offer?  ',
        answer: 'We specialize in custom software development, mobile and web applications, UI/UX design, and IT consulting solutions tailored to your business needs.    ',
        isOpen: false
      },
      {
        question: 'Do you offer both web and mobile app development?',
        answer: 'Yes, at Sprintpark we offer both web and mobile app development, delivering customized solutions to meet your business needs.',
        isOpen: false
      },
      {
        question: 'What industries do you serve?',
        answer: 'We serve diverse industries including healthcare, education, finance, retail, and technology, providing tailored digital solutions for each sector.',
        isOpen: false
      },
      {
        question: ' How do you ensure quality and security in your projects?',
        answer: 'We ensure quality and security through rigorous testing, code reviews, and strict compliance with industry best practices and security standards.',
        isOpen: false
      }
    ];
    toggleFAQ(index: number) {
      this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
    }
  // Section 5- Why Hire   
    reasons = [
      {
        icon: '/assets/contactuslogos/1.png',
        title: 'Certified Consultants and Architects'
      },
      {
        icon: '/assets/contactuslogos/2.png',
        title: '100+ Projects Delivered'
      },
      {
        icon: '/assets/contactuslogos/3.png',
        title: '24/7 Support'
      },
      {
        icon: '/assets/contactuslogos/4.png',
        title: 'Flexible Solutions'
      },
      {
        icon: '/assets/contactuslogos/5.png',
        title: 'Extensive Experience'
      },
      {
        icon: '/assets/contactuslogos/6.png',
        title: 'Complete Data Privacy'
      }
    ];
 
}
 