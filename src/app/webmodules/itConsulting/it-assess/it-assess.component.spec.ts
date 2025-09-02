import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAssessComponent } from './it-assess.component';

describe('ItAssessComponent', () => {
  let component: ItAssessComponent;
  let fixture: ComponentFixture<ItAssessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItAssessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAssessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
