import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinLogComponent } from './checkin-log.component';
import {MatCardModule, MatTableModule} from '@angular/material';

describe('CheckinLogComponent', () => {
  let component: CheckinLogComponent;
  let fixture: ComponentFixture<CheckinLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatTableModule
      ],
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
