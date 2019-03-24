import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from '../models/room.model';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

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
