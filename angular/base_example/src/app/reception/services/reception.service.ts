import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {CheckinLog} from '../models/checkinlog.model';
import {Checkin} from '../models/checkin.model';

@Injectable({
  providedIn: 'root'
})
export class ReceptionService {

  constructor(private http: HttpClient) {

  }

  public getRooms(): Observable<Array<Room>> {
    return this.http.get<Array<Room>>(`${environment.apiUrl}/room`).pipe(
      map((responseData) => convertApiRooms(responseData))
    );
  }

  public getCheckinlogs(roomid?: number): Observable<Array<CheckinLog>> {

    let requestOptions = {};

    if (roomid) {
      requestOptions = { params: { room: roomid } };
    }

    return this.http.get<Array<CheckinLog>>(`${environment.apiUrl}/checkinlog/`, requestOptions).pipe(
      map((responseData) => convertApiCheckinlogs(responseData))
    );
  }

  public getCheckins(roomid?: number): Observable<Array<Checkin>> {

    let requestOptions = {};

    if (roomid) {
      requestOptions = { params: { room: roomid } };
    }

    return this.http.get<Array<Checkin>>(`${environment.apiUrl}/checkin/`, requestOptions).pipe(
      map((responseData) => convertApiCheckins(responseData))
    );
  }
}

function convertApiRoom(data: any): Room {
  return {
    id: data.id,
    name: data.name
  };
}

function convertApiRooms(data: any): Array<Room> {
  return data.map((item) => convertApiRoom(item));
}

function convertApiCheckinlog(data: any): CheckinLog {
  return {
    date: new Date(Date.parse(data.date)),
    message: data.message
  };
}

function convertApiCheckinlogs(data: any): Array<CheckinLog> {
  return data.map((item) => convertApiCheckinlog(item));
}

function convertApiCheckin(data: any): Checkin {
  return {
    id: data.id,
    person: {
      name: data.person.name
    },
    room: {
      id: data.room.id,
      name: data.room.name
    }
  }
}

function convertApiCheckins(data: any): Array<Checkin> {
  return data.map((item) => convertApiCheckin(item));
}
