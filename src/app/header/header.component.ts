import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
 
@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // <-- fix here
})
 
export class HeaderComponent {
  isScrolled = false;
  modalService: any;
 
  onAboutClick(){
const section=document.getElementById('about-us');
if(section){
  section.scrollIntoView({behavior:'smooth',block:'start'});
}
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 100;
  }
 
 
}