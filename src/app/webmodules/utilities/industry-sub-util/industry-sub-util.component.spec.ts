import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrySubUtilComponent } from './industry-sub-util.component';

describe('IndustrySubUtilComponent', () => {
  let component: IndustrySubUtilComponent;
  let fixture: ComponentFixture<IndustrySubUtilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustrySubUtilComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndustrySubUtilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
