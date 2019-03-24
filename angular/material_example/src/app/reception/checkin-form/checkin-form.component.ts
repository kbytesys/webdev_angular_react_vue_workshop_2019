import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Room} from '../shared/room.model';
import {ReceptionService} from '../shared/reception.service';

@Component({
  selector: 'app-checkin-form',
  templateUrl: './checkin-form.component.html',
  styleUrls: ['./checkin-form.component.scss']
})
export class CheckinFormComponent implements OnInit {

  @Input()
  public rooms: Array<Room>;

  @Output()
  public checkin: EventEmitter<void> = new EventEmitter();

  public lastCheckinError: string;

  constructor(private formBuilder: FormBuilder, private receptionService: ReceptionService) { }

  checkinForm = this.formBuilder.group({
    room: ['', Validators.required],
    personName: ['', Validators.required]
  });

  ngOnInit() {
  }

  onSubmit() {
    this.receptionService.checkin(this.checkinForm.value.room, {name: this.checkinForm.value.personName})
      .subscribe(
        () => {
          this.lastCheckinError = null;
          this.checkin.emit();
        },
        (response) => {
          this.lastCheckinError = response.error && response.error.message ? response.error.message : response
        })
  }
}
