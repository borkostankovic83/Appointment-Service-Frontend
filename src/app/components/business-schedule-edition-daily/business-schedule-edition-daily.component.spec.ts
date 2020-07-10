import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessScheduleEditionDailyComponent } from './business-schedule-edition-daily.component';

describe('BusinessScheduleEditionDailyComponent', () => {
  let component: BusinessScheduleEditionDailyComponent;
  let fixture: ComponentFixture<BusinessScheduleEditionDailyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessScheduleEditionDailyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessScheduleEditionDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
