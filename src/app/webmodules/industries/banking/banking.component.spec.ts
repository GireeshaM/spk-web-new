import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankingComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}), // or whatever params you want to mock
            snapshot: { paramMap: { get: () => null } },
            // add more mocks if your component uses them
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
