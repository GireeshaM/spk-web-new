import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItCommonComponent } from './it-common.component';

describe('ItCommonComponent', () => {
  let component: ItCommonComponent;
  let fixture: ComponentFixture<ItCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
