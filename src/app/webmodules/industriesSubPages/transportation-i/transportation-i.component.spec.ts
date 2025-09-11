import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationIComponent } from './transportation-i.component';

describe('TransportationIComponent', () => {
  let component: TransportationIComponent;
  let fixture: ComponentFixture<TransportationIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportationIComponent]
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
