import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationIComponent } from './education-i.component';

describe('EducationIComponent', () => {
  let component: EducationIComponent;
  let fixture: ComponentFixture<EducationIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
