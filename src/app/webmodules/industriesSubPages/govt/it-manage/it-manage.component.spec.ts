import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItManageComponent } from './it-manage.component';

describe('ItManageComponent', () => {
  let component: ItManageComponent;
  let fixture: ComponentFixture<ItManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItManageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
