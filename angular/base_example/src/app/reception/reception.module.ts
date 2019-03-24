import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';

@NgModule({
  declarations: [DashboardComponent, RoomDetailComponent],
  imports: [
    CommonModule,
    ReceptionRoutingModule
  ]
})
export class ReceptionModule { }
