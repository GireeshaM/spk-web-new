import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustryUtilComponent } from './industry-util.component';

describe('IndustryUtilComponent', () => {
  let component: IndustryUtilComponent;
  let fixture: ComponentFixture<IndustryUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustryUtilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustryUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
