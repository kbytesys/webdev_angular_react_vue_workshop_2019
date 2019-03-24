import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Resolve} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {Room} from '../shared/room.model';
import {ReceptionService} from '../shared/reception.service';

const ROOMID_PARAM = 'roomId';

@Injectable({
  providedIn: 'root'
})
export class ResolveRoomGuard implements Resolve<Room> {
  constructor(private receptionService: ReceptionService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Room> | Promise<Room> | Room {
    const roomId: number = parseInt(route.params[ROOMID_PARAM], 10);
    if (!roomId) {
      return throwError(new Error('Room id parameter missing or malformed'));
    }

    return this.receptionService.getRoom(roomId);
  }

}
