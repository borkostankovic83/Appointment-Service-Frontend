import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentsUserComponent } from './appointments-user.component';

describe('AppointmentsUserComponent', () => {
  let component: AppointmentsUserComponent;
  let fixture: ComponentFixture<AppointmentsUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointmentsUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
