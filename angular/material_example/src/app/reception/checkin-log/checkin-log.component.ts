import {Component, Input, OnInit} from '@angular/core';
import {CheckinLog} from '../shared/checkinlog.model';

@Component({
  selector: 'app-checkin-log',
  templateUrl: './checkin-log.component.html',
  styleUrls: ['./checkin-log.component.scss']
})
export class CheckinLogComponent implements OnInit {

  constructor() { }

  @Input()
  public checksinLog: Array<CheckinLog>;

  ngOnInit() {
  }

}
