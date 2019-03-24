import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../shared/room.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {CheckinLog} from '../shared/checkinlog.model';
import {Checkin} from '../shared/checkin.model';
import {Person} from '../shared/person.model';

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

  public getRoom(roomId: number): Observable<Room> {
    return this.http.get<Room>(`${environment.apiUrl}/room/${roomId}`).pipe(
      map((responseData) => convertApiRoom(responseData))
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

  public getChecksin(roomid?: number): Observable<Array<Checkin>> {

    let requestOptions = {};

    if (roomid) {
      requestOptions = { params: { room: roomid } };
    }

    return this.http.get<Array<Checkin>>(`${environment.apiUrl}/checkin/`, requestOptions).pipe(
      map((responseData) => convertApiChecksin(responseData))
    );
  }

  public checkout(checkinId: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/checkin/${checkinId}`);
  }

  public checkin(room: Room, person: Person): Observable<any> {
    return this.http.put(`${environment.apiUrl}/checkin/`, {person, room});
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
  };
}

function convertApiChecksin(data: any): Array<Checkin> {
  return data.map((item) => convertApiCheckin(item));
}
