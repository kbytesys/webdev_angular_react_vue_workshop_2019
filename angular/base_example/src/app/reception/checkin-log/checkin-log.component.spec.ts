import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinLogComponent } from './checkin-log.component';

describe('CheckinLogComponent', () => {
  let component: CheckinLogComponent;
  let fixture: ComponentFixture<CheckinLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckinLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
