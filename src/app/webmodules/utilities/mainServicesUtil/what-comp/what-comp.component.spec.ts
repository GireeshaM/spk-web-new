import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhatCompComponent } from './what-comp.component';

describe('WhatCompComponent', () => {
  let component: WhatCompComponent;
  let fixture: ComponentFixture<WhatCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatCompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatCompComponent);
    component = fixture.componentInstance;

    component.whyMainHeading = 'Test Main Heading';
    component.whySubHeading = 'Test Sub Heading';
    component.whyContent = 'Short test content for template rendering.';
    component.whyCards = [
      { title: 'Card A', desc: 'Desc A' },
      { title: 'Card B', desc: 'Desc B' },
    ];

    component.images = {
      left: { src: 'assets/test/left.png', alt: 'Left image alt' },
      right: [
        { src: 'assets/test/right1.png', alt: 'Right image 1' },
        { src: 'assets/test/right2.png', alt: 'Right image 2' },
      ],
    };

    fixture.detectChanges();
  });

  // ✅ ACTUAL TEST
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
