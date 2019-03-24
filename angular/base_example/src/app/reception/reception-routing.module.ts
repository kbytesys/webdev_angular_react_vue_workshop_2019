import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RoomDetailComponent} from './room-detail/room-detail.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'room_detail/:roomId', component: RoomDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceptionRoutingModule { }
