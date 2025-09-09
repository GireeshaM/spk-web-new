import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingIComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingIComponent;
  let fixture: ComponentFixture<BankingIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankingIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
