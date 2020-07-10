import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessScheduleEditionWeeklyComponent } from './business-schedule-edition-weekly.component';

describe('BusinessScheduleEditionWeeklyComponent', () => {
  let component: BusinessScheduleEditionWeeklyComponent;
  let fixture: ComponentFixture<BusinessScheduleEditionWeeklyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessScheduleEditionWeeklyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessScheduleEditionWeeklyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
