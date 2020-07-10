import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessScheduleDisplayComponent } from './business-schedule-display.component';

describe('BusinessScheduleDisplayComponent', () => {
  let component: BusinessScheduleDisplayComponent;
  let fixture: ComponentFixture<BusinessScheduleDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessScheduleDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessScheduleDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
