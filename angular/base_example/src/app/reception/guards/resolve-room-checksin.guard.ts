import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {ReceptionService} from '../shared/reception.service';
import {Checkin} from '../shared/checkin.model';

const ROOMID_PARAM = 'roomId';

@Injectable({
  providedIn: 'root'
})
export class ResolveRoomChecksinGuard implements Resolve<Array<Checkin>> {
  constructor(private receptionService: ReceptionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Array<Checkin>> | Promise<Array<Checkin>> | Array<Checkin> {
    const roomId: number = parseInt(route.params[ROOMID_PARAM], 10);
    if (!roomId) {
      return throwError(new Error('Room id parameter missing or malformed'));
    }

    return this.receptionService.getChecksin(roomId);
  }
}
