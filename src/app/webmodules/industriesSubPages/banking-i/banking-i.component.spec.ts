import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingIComponent } from './banking-i.component';
import {  provideRouter } from '@angular/router';

describe('BankingIComponent', () => {
  let component: BankingIComponent;
  let fixture: ComponentFixture<BankingIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingIComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
