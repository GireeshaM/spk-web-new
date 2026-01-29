import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { CareersComponent } from './careers.component';

describe('CareersComponent', () => {
  let component: CareersComponent;
  let fixture: ComponentFixture<CareersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CareersComponent,
        NoopAnimationsModule,
        RouterTestingModule, // ✅ ADD THIS
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CareersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
