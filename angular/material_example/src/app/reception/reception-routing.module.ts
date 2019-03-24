import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';
import {ResolveRoomGuard} from './guards/resolve-room.guard';
import {ResolveRoomChecksinGuard} from './guards/resolve-room-checksin.guard';
import {ResolveRoomChecksinLogGuard} from './guards/resolve-room-checksin-log.guard';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'room_detail/:roomId', component: RoomDetailComponent, resolve: {
      room: ResolveRoomGuard, checksin: ResolveRoomChecksinGuard, checksinLog: ResolveRoomChecksinLogGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
