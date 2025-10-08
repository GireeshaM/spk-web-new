import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecommunicationIComponent } from './telecommunication-i.component';
import { provideRouter } from '@angular/router';

describe('TelecommunicationIComponent', () => {
  let component: TelecommunicationIComponent;
  let fixture: ComponentFixture<TelecommunicationIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelecommunicationIComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(TelecommunicationIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
