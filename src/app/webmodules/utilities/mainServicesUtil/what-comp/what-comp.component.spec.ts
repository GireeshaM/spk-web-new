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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
