import { TestBed } from '@angular/core/testing';

import { ReceptionService } from './reception.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room.model';
import {environment} from '../../../environments/environment';
import {CheckinLog} from '../models/checkinlog.model';
import {Checkin} from '../models/checkin.model';

describe('ReceptionService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let receptionService: ReceptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });

    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    receptionService = TestBed.get(ReceptionService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should get the room list', () => {
    // given
    receptionService = TestBed.get(ReceptionService);
    let expectedRooms = [{id: 1, name: "Room 1"}, {id: 2, name: "Room 2"}] as Array<Room>;

    // when
    receptionService.getRooms().subscribe(
      rooms => expect(rooms).toEqual(expectedRooms, 'should return expected rooms')
    );

    // then
    const req = httpTestingController.expectOne(`${environment.apiUrl}/room`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedRooms);
  });

  it('should be created', () => {
    receptionService = TestBed.get(ReceptionService);
    expect(receptionService).toBeTruthy();
  });

  describe('#getCheckinlogs', () => {
    let expectedCheckinLogs;
    let expectedApiResponse;

    beforeEach(() => {
      receptionService = TestBed.get(ReceptionService);
      var testDateString = '2019-03-24T10:00:00.000Z';
      var refDate = new Date(Date.parse(testDateString));
      expectedCheckinLogs = [{date: refDate, message: "message 1"}, {date: refDate, message: "message 2"}] as Array<CheckinLog>;
      expectedApiResponse = [{roomid: 1, date: testDateString, message: "message 1"}, {roomid: 2, date: testDateString, message: "message 2"}];
    });

    it('should get the checkinlog list', () => {
      // when
      receptionService.getCheckinlogs().subscribe(
        checkinlogs => expect(checkinlogs).toEqual(expectedCheckinLogs, 'should return expected checkinlogs')
      );

      // then
      const req = httpTestingController.expectOne(`${environment.apiUrl}/checkinlog/`);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedApiResponse);
    });

    it('should get the checkinlog list with room parameter', () => {
      // when
      receptionService.getCheckinlogs(1).subscribe(
        checkinlogs => expect(checkinlogs).toEqual(expectedCheckinLogs, 'should return expected checkinlogs')
      );

      // then
      // TODO workaround for https://github.com/angular/angular/issues/19974
      const req = httpTestingController.expectOne(req => req.method === 'GET' && req.url === `${environment.apiUrl}/checkinlog/`);
      expect(req.request.method).toEqual('GET');
      expect(req.request.params.get('room').toString()).toEqual('1');
      req.flush(expectedApiResponse);
    });
  });

  describe('#getCheckins', () => {
    let expectedCheckins;

    beforeEach(() => {
      receptionService = TestBed.get(ReceptionService);
      expectedCheckins = [
        {id: 1, person: {name: "name1"}, room: {id: 1, name: "room1"}},
        {id: 2, person: {name: "name2"}, room: {id: 1, name: "room1"}}] as Array<Checkin>;
    });

    it('should get the checkin list', () => {
      // when
      receptionService.getCheckins().subscribe(
        checkinlogs => expect(checkinlogs).toEqual(expectedCheckins, 'should return expected checkins')
      );

      // then
      const req = httpTestingController.expectOne(`${environment.apiUrl}/checkin/`);
      expect(req.request.method).toEqual('GET');
      req.flush(expectedCheckins);
    });

    it('should get the checkin list with room parameter', () => {
      // when
      receptionService.getCheckins(1).subscribe(
        checkinlogs => expect(checkinlogs).toEqual(expectedCheckins, 'should return expected checkins')
      );

      // then
      // TODO workaround for https://github.com/angular/angular/issues/19974
      const req = httpTestingController.expectOne(req => req.method === 'GET' && req.url === `${environment.apiUrl}/checkin/`);
      expect(req.request.method).toEqual('GET');
      expect(req.request.params.get('room').toString()).toEqual('1');
      req.flush(expectedCheckins);
    });
  });
});
