import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsightsBlogComponent } from './insights-blog.component';

describe('InsightsBlogComponent', () => {
  let component: InsightsBlogComponent;
  let fixture: ComponentFixture<InsightsBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsBlogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsightsBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
