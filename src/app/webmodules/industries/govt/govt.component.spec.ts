import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtComponent } from './govt.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('GovtComponent', () => {
  let component: GovtComponent;
  let fixture: ComponentFixture<GovtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovtComponent],
         providers: [
      {
        provide: ActivatedRoute,
        useValue: {
          params: of({}),  // or whatever params you want to mock
          snapshot: { paramMap: { get: () => null } },
          // add more mocks if your component uses them
        }
      }
    ],
    }).compileComponents();

    fixture = TestBed.createComponent(GovtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
