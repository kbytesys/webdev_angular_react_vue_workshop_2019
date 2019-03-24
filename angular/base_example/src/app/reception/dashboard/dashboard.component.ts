import { Component, OnInit } from '@angular/core';
import {ReceptionService} from '../shared/reception.service';
import {Checkin} from '../shared/checkin.model';
import {CheckinLog} from '../shared/checkinlog.model';
import {Room} from '../shared/room.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private receptionService: ReceptionService) { }

  public checksin: Array<Checkin>;
  public checksinLog: Array<CheckinLog>;
  public rooms: Array<Room>;

  ngOnInit() {
    this.refreshData();
    this.receptionService.getRooms().subscribe(items => this.rooms = items);
  }

  public onCheckoutOrCheckin(): void {
    this.refreshData();
  }

  public refreshData(): void {
    this.receptionService.getChecksin().subscribe(items => this.checksin = items);
    this.receptionService.getCheckinlogs().subscribe(items => this.checksinLog = items);
  }

}
