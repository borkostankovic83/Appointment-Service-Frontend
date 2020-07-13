import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSubnavComponent } from './navbar-subnav.component';

describe('NavbarSubnavComponent', () => {
  let component: NavbarSubnavComponent;
  let fixture: ComponentFixture<NavbarSubnavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSubnavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSubnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
