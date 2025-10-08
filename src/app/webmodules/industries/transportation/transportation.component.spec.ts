import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationComponent } from './transportation.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('TransportationComponent', () => {
  let component: TransportationComponent;
  let fixture: ComponentFixture<TransportationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportationComponent],
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

    fixture = TestBed.createComponent(TransportationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
