import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {ReceptionService} from '../shared/reception.service';
import {CheckinLog} from '../shared/checkinlog.model';

const ROOMID_PARAM = 'roomId';

@Injectable({
  providedIn: 'root'
})
export class ResolveRoomChecksinLogGuard  implements Resolve<Array<CheckinLog>> {
  constructor(private receptionService: ReceptionService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Array<CheckinLog>> | Promise<Array<CheckinLog>> | Array<CheckinLog> {

    const roomId: number = parseInt(route.params[ROOMID_PARAM], 10);
    if (!roomId) {
      return throwError(new Error('Room id parameter missing or malformed'));
    }

    return this.receptionService.getCheckinlogs(roomId);
  }
}
