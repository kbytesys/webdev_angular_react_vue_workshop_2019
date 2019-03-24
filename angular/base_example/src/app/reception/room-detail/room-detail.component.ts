import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Room} from '../shared/room.model';
import {Checkin} from '../shared/checkin.model';
import {CheckinLog} from '../shared/checkinlog.model';
import {ReceptionService} from '../shared/reception.service';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.scss']
})
export class RoomDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private receptionService: ReceptionService) { }

  public room: Room;
  public checksin: Array<Checkin>;
  public checksinLog: Array<CheckinLog>;

  ngOnInit() {
    this.route.data
      .subscribe((data: { room: Room, checksin: Array<Checkin>, checksinLog: Array<CheckinLog> }) => {
        this.room = data.room;
        this.checksin = data.checksin;
        this.checksinLog = data.checksinLog;
      });
  }

  public onCheckout() {
    this.refreshData();
  }

  public refreshData() {
    this.receptionService.getChecksin(this.room.id).subscribe(items => this.checksin = items);
    this.receptionService.getCheckinlogs(this.room.id).subscribe(items => this.checksinLog = items);
  }

}
