import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySpCompComponent } from './why-sp-comp.component';

describe('WhySpCompComponent', () => {
  let component: WhySpCompComponent;
  let fixture: ComponentFixture<WhySpCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhySpCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhySpCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
