import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatWeDoCompComponent } from './what-we-do-comp.component';

describe('WhatWeDoCompComponent', () => {
  let component: WhatWeDoCompComponent;
  let fixture: ComponentFixture<WhatWeDoCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhatWeDoCompComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhatWeDoCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
