import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageSolutionsComponent } from './manage-solutions.component';

describe('ManageSolutionsComponent', () => {
  let component: ManageSolutionsComponent;
  let fixture: ComponentFixture<ManageSolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageSolutionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
