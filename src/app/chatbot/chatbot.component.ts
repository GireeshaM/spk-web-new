import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Message {
  sender: string;
  text: string;
  isHtml?: boolean; // Optional to allow for plain text messages
}

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.scss',
})
export class ChatbotComponent {
  public isChatOpen = false; // Controls the chatbot's visibility
  public userMessage: string = '';
  public messages: Message[] = [];
  public isInputEnabled = false;
  public showOptions: boolean = true; // Show the initial options when the chatbot opens

  public updateMessage(event: Event): void {
    this.userMessage = (event.target as HTMLInputElement).value;
  }

  public sendMessage(): void {
    if (this.userMessage.trim()) {
      this.messages.push({ sender: 'user', text: this.userMessage });

      // Display a specific message from the bot
      this.simulateBotResponse(
        'Is there anything I can help you with? Feel free to <a href="/contact-us">contact us</a>.',
        true, // Indicating this response includes HTML
      );

      this.userMessage = ''; // Clear input
    }
  }

  public toggleChat(): void {
    this.isChatOpen = !this.isChatOpen; // Toggle the chatbox visibility
  }

  // Handle clicks on the options
  public handleOptionClick(option: string): void {
    this.showOptions = false; // Hide options once clicked

    switch (option) {
      case 'customerSupport':
        this.messages.push({
          sender: 'user',
          text: 'I am a customer needing support',
        });
        this.simulateBotResponse(
          'Thank you for reaching out. How can I assist you today with your support needs?',
        );
        break;

      case 'jobOpportunities':
        this.messages.push({ sender: 'user', text: 'Job Opportunities' });
        this.simulateBotResponse(
          `Thank you for showing interest in Sprintpark solutions. We are excited to grow our team. Please visit our <a href='/careers'>career page</a> for more details.`,
          true,
        );
        setTimeout(() => {
          this.simulateBotResponse('Have a great day!');
        }, 1500);
        break;

      case 'connectWithUs':
        this.messages.push({
          sender: 'user',
          text: 'Connect with Us',
        });
        this.simulateBotResponse(
          'Thank you for reaching out. Feel free to <a href="/contact-us">contact us</a> anytime.',
          true,
        );
        break;

      case 'exploreServices':
        this.messages.push({
          sender: 'user',
          text: 'Explore Sprintpark Services',
        });
    this.simulateBotResponse(
  `SprintPark excels in delivering high-quality services such as 
  <a href="/it-consulting">IT Consulting</a>, 
  <a href="/staffing">Staffing</a>, 
  <a href="/project-management">Project Management</a>, and 
  <a href="/software-service">Software Services</a>. 
  Along with our services, we also offer powerful digital products including 
  <a href="/products">Smart Rack</a>, 
  <a href="/products">Interior Living</a>, 
  <a href="/products">LMS</a>, and 
  <a href="/products">Code Detector</a>—all designed to enhance enterprise efficiency and innovation.`,
  true
);

        break;

      case 'skillsAndRoles':
        this.messages.push({
          sender: 'user',
          text: 'Role and Skills Requirements',
        });
        this.simulateBotResponse(
          'Explore a career in SprintPark that challenges and inspires you by visiting our <a href="/careers">Career</a> page for more information.',
          true,
        );
        break;

      case 'hiringTimelineProcess':
        this.messages.push({
          sender: 'user',
          text: 'Hiring Timeline and Process',
        });
        this.simulateBotResponse(
          'Curious about how our hiring process works? Head over to the <a href="/staffing">Staffing</a> section to get detailed insights into our timeline and procedures.',
          true,
        );
        break;

      case 'workArrangement':
        this.messages.push({
          sender: 'user',
          text: 'Work Arrangement',
        });
        this.simulateBotResponse(
          'Discover how our flexible work arrangements enhance project efficiency. Learn more in our <a href="/project-management">Project Management</a> overview.',
          true,
        );
        break;

      default:
        this.simulateBotResponse('Sorry, I didn’t understand that.');
    }
    this.isInputEnabled = true;
  }

  // Bot's response with an option to include HTML
  public simulateBotResponse(
    responseText: string,
    isHtml: boolean = false,
  ): void {
    setTimeout(() => {
      this.messages.push({ sender: 'bot', text: responseText, isHtml });
    }, 1000);
  }

  public closeChat(): void {
    this.isChatOpen = false;
  }
}
