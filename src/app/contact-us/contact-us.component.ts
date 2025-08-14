import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
contactForm: FormGroup;
  faqItems = [
    {
      question: 'What services does your company offer?',
      answer: 'We specialize in custom software development, mobile and web applications, UI/UX design, and IT consulting solutions tailored to your business needs.    ',
      isOpen: false
    },
    {
      question: 'Do you offer both web and mobile app development??',
      answer: 'We follow agile methodologies and regular client updates.',
      isOpen: false
    },
    {
      question: 'What industries do you serve?',
      answer: 'Yes, we provide flexible staffing for your project needs.',
      isOpen: false
    },
    {
      question: ' How do you ensure quality and security in your projects?',
      answer: 'Yes, we provide flexible staffing for your project needs.',
      isOpen: false
    }
  ];

  socialLinks = [
    { name: 'LinkedIn', icon: 'assets/contactus/linkedin.png', url: '#' },
    { name: 'X (Twitter)', icon: 'assets/contactus/twitter.png', url: '#' },
    { name: 'YouTube', icon: 'assets/contactus/youtube.png', url: '#' },
    { name: 'Facebook', icon: 'assets/contactus/facebook.png', url: '#' },
    { name: 'Instagram', icon: 'assets/contactus/instagram.png', url: '#' },
    { name: 'Glassdoor', icon: 'assets/contactus/glassdoor.png', url: '#' }
  ];

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
      address: '2nd Floor, Abhi\'s Ganga, Vittal Rao Nagar, Madhapur, Hyderabad, Telangana 500081',
      phone: '+1 (860) 566 9894',
      email: 'hr@sprintpark.com'
    }
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      // Handle form submission logic here
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  private markFormGroupTouched() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  toggleFAQ(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
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
}
