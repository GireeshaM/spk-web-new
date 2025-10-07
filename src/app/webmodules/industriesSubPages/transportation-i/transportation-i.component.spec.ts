import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationIComponent } from './transportation-i.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { of } from 'rxjs';

describe('TransportationIComponent', () => {
  let component: TransportationIComponent;
  let fixture: ComponentFixture<TransportationIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportationIComponent],
       providers: [
    provideRouter([]),
    {
      provide: ActivatedRoute,
      useValue: {
        paramMap: of({
          get: (key: string) => 'it-consulting' 
        }),
      }
    }
  ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportationIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
