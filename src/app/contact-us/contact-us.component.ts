import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MainHeroSectionComponent } from '../webmodules/utilities/main-hero-section/main-hero-section.component';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule, ReactiveFormsModule, MainHeroSectionComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  // Section 1
  public whatMainHeader = 'Get in touch with SprintPark';
  public whatDescription =
    'We’re here to answer your questions, support your journey, and help you move forward faster.';
  public heroImage = 'assets/contactus/contactus.png';
  public smallImage = 'assets/contactus/contactus.png';
  //section 2 Contact form

  public locations = [
    {
      type: 'usa',
      title: 'USA Location :',
      address: '85 Felt Rd, Suite #604, South Windsor, CT 06074',
      phone: '+1 (860) 566 9894',
      email: 'info@sprintpark.com',
    },
    {
      type: 'india',
      title: 'India Location :',
      address:
        'Unit No. 1204,12th Floor,B Block,Asian Suncity, Kondapur, Hyderabad, Telangana 500084',
      phone: '+91 7207735554',
      email: 'humanresources@sprintpark.com',
    },
  ];
  public onSubmit(): void {
    if (this.contactForm.valid) {
      // alert("success");
      //  console.log('Form submitted:', this.contactForm.value);
      this.sendEmail(new Event('submit'));
    } else {
      // console.log('Form is invalid');
      this.contactForm.markAllAsTouched();
    }
  }

  public sendEmail(e: Event): void {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_j07jrmv',
        'template_v0oy7ti',
        e.target as HTMLFormElement,
        {
          publicKey: 'RqHEh2bb5Kq3zVphS',
        },
      )
      .then(
        () => {
          // eslint-disable-next-line no-console

          console.log('SUCCESS!');
        },
        (error) => {
          // eslint-disable-next-line no-console

          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }

  private fb = inject(FormBuilder);

  public contactForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ],
    ],
    phone: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach((key) => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }
  public getFormControlError(controlName: string): string | null {
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
  public socialLinks = [
    {
      name: 'LinkedIn',
      icon: 'assets/contactus/linkedin.png',
      url: 'https://www.linkedin.com/company/sprintpark-tech/posts/?feedView=all',
    },
    {
      name: 'X (Twitter)',
      icon: 'assets/contactus/twitter.png',
      url: 'https://x.com/SprintParkllc/status/1914318204765405387',
    },
    {
      name: 'YouTube',
      icon: 'assets/contactus/youtube.png',
      url: 'https://www.youtube.com/channel/UCxdBnMoAUtX4PbqnKApXVhg',
    },
    {
      name: 'Facebook',
      icon: 'assets/contactus/facebook.png',
      url: 'https://www.facebook.com/SPRINTPARKLLC/',
    },
    {
      name: 'Instagram',
      icon: 'assets/contactus/instagram.png',
      url: 'https://www.instagram.com/sprintpark/',
    },
    {
      name: 'Glassdoor',
      icon: 'assets/contactus/glassdoor.png',
      url: 'https://www.glassdoor.co.in/Reviews/SprintPark-Reviews-E9736051.htm',
    },
  ];
  // Section 4- FAQ
  public faqItems = [
    {
      question: 'What services does your company offer?  ',
      answer:
        'We specialize in custom software development, mobile and web applications, UI/UX design, and IT consulting solutions tailored to your business needs.    ',
      isOpen: false,
    },
    {
      question: 'Do you offer both web and mobile app development?',
      answer:
        'Yes, at Sprintpark we offer both web and mobile app development, delivering customized solutions to meet your business needs.',
      isOpen: false,
    },
    {
      question: 'What industries do you serve?',
      answer:
        'We serve diverse industries including healthcare, education, finance, retail, and technology, providing tailored digital solutions for each sector.',
      isOpen: false,
    },
    {
      question: ' How do you ensure quality and security in your projects?',
      answer:
        'We ensure quality and security through rigorous testing, code reviews, and strict compliance with industry best practices and security standards.',
      isOpen: false,
    },
  ];
  public toggleFAQ(index: number): void {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
  // Section 5- Why Hire
  public reasons = [
    {
      icon: 'assets/contactus/certified-consultants.png',
      title: 'Certified Consultants and Architects',
    },
    {
      icon: 'assets/contactus/projects-delivered.png',
      title: '100+ Projects Delivered',
    },
    {
      icon: 'assets/contactus/247-support.png',
      title: '24/7 Support',
    },
    {
      icon: 'assets/contactus/flexible-solutions.png',
      title: 'Flexible Solutions',
    },
    {
      icon: 'assets/contactus/extensive-experience.png',
      title: 'Extensive Experience',
    },
    {
      icon: 'assets/contactus/data-privacy.png',
      title: 'Complete Data Privacy',
    },
  ];
}
