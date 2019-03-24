import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomDetailComponent } from './room-detail.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {GuestListComponent} from '../guest-list/guest-list.component';
import {CheckinLogComponent} from '../checkin-log/checkin-log.component';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {MatCardModule, MatTableModule} from '@angular/material';

describe('RoomDetailComponent', () => {
  let component: RoomDetailComponent;
  let fixture: ComponentFixture<RoomDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatCardModule,
        MatTableModule
      ],
      declarations: [ RoomDetailComponent, GuestListComponent, CheckinLogComponent ],
      providers: [
        { provide: ActivatedRoute, useClass: class { data = of({room: {id: 1, name: 'Test room'}}); }}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
