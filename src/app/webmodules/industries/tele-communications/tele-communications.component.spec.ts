import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleCommunicationsComponent } from './tele-communications.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TeleCommunicationsComponent', () => {
  let component: TeleCommunicationsComponent;
  let fixture: ComponentFixture<TeleCommunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleCommunicationsComponent],
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

    fixture = TestBed.createComponent(TeleCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
