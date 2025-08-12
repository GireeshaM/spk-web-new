import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockCompComponent } from './unlock-comp.component';

describe('UnlockCompComponent', () => {
  let component: UnlockCompComponent;
  let fixture: ComponentFixture<UnlockCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
