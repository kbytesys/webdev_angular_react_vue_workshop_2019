import { Component, OnInit } from '@angular/core';
import {ReceptionService} from '../shared/reception.service';
import {Checkin} from '../shared/checkin.model';
import {CheckinLog} from '../shared/checkinlog.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private receptionService: ReceptionService) { }

  public checksin: Array<Checkin>;
  public checksinLog: Array<CheckinLog>;

  ngOnInit() {
    this.refreshData();
  }

  public onCheckout(): void {
    this.refreshData();
  }

  public refreshData(): void {
    this.receptionService.getChecksin().subscribe(items => this.checksin = items);
    this.receptionService.getCheckinlogs().subscribe(items => this.checksinLog = items);
  }

}
