import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleCommunicationsComponent } from './tele-communications.component';

describe('TeleCommunicationsComponent', () => {
  let component: TeleCommunicationsComponent;
  let fixture: ComponentFixture<TeleCommunicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeleCommunicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeleCommunicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
