import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListComponent } from './guest-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatCardModule, MatTableModule} from '@angular/material';

describe('GuestListComponent', () => {
  let component: GuestListComponent;
  let fixture: ComponentFixture<GuestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatTableModule
      ],
      declarations: [ GuestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
