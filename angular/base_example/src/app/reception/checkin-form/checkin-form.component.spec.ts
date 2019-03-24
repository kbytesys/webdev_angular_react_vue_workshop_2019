import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinFormComponent } from './checkin-form.component';

describe('CheckinFormComponent', () => {
  let component: CheckinFormComponent;
  let fixture: ComponentFixture<CheckinFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
