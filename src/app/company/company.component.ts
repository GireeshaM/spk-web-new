import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild, Renderer2, OnInit, OnDestroy } from '@angular/core';
interface CarouselItem {
  title: string;
  description: string;
}
@Component({
  selector: 'app-company',
  imports:[CommonModule],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent  {
 
}