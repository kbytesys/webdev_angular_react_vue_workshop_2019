import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Checkin} from '../shared/checkin.model';
import {ReceptionService} from '../shared/reception.service';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor(private receptionService: ReceptionService) { }

  @Input()
  public checksin: Array<Checkin>;

  @Output()
  public checkout: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit() {
  }

  public checkoutPerson(checkinId: number) {
    this.receptionService.checkout(checkinId).subscribe(() => this.checkout.emit());
  }
}
