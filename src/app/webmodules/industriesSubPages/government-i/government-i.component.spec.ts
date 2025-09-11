import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentIComponent } from './government-i.component';

describe('GovernmentIComponent', () => {
  let component: GovernmentIComponent;
  let fixture: ComponentFixture<GovernmentIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
