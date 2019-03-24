import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceptionRoutingModule } from './reception-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoomDetailComponent } from './room-detail/room-detail.component';
import { CheckinFormComponent } from './checkin-form/checkin-form.component';
import { GuestListComponent } from './guest-list/guest-list.component';
import { CheckinLogComponent } from './checkin-log/checkin-log.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule, MatTableModule, MatToolbarModule} from '@angular/material';

@NgModule({
  declarations: [DashboardComponent, RoomDetailComponent, CheckinFormComponent, GuestListComponent, CheckinLogComponent],
  imports: [
    CommonModule,
    ReceptionRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class ReceptionModule { }
