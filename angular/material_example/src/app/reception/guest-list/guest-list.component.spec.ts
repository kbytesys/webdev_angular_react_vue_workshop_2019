import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestListComponent } from './guest-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatCardModule, MatTableModule} from '@angular/material';
import {Checkin} from '../shared/checkin.model';
import {ReceptionService} from '../shared/reception.service';
import {of, throwError} from 'rxjs';

describe('GuestListComponent', () => {
  let component: GuestListComponent;
  let fixture: ComponentFixture<GuestListComponent>;
  let receptionServiceSpy: jasmine.SpyObj<ReceptionService>;

  const demoData: Array<Checkin> = [
    {id: 1, person: {name: "name1"}, room: {id: 1, name: "room1"}},
    {id: 2, person: {name: "name2"}, room: {id: 1, name: "room1"}},
    {id: 3, person: {name: "name3"}, room: {id: 2, name: "room2"}},
    {id: 4, person: {name: "name4"}, room: {id: 2, name: "room2"}}
  ];

  beforeEach(async(() => {
    receptionServiceSpy = jasmine.createSpyObj('ReceptionService', ['checkout']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatCardModule,
        MatTableModule
      ],
      declarations: [ GuestListComponent ],
      providers:  [{ provide: ReceptionService, useValue: receptionServiceSpy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestListComponent);
    component = fixture.componentInstance;
    component.checksin = demoData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show four items with demo data', () => {
    // NOTE: this test is not optimal because depends on the template
    const nativeElement: HTMLElement = fixture.nativeElement;
    const actionLinks = nativeElement.querySelectorAll('a');
    expect(actionLinks.length).toEqual(4);

    const fistRoomCol = nativeElement.querySelectorAll('tbody td')[0];
    fistRoomCol.textContent = 'room1';
  });

  it('should call the checkout on cta click', () => {
    // NOTE: this test is not optimal because depends on the template
    const nativeElement: HTMLElement = fixture.nativeElement;
    const actionLink = nativeElement.querySelectorAll('a')[0];
    spyOn(component, 'checkoutPerson');

    actionLink.click();

    expect(component.checkoutPerson).toHaveBeenCalledWith(1);
  });

  it('should emit the event on checkout success', async(() => {
    receptionServiceSpy.checkout.and.returnValue(of({message: 'OK'}));
    spyOn(component.checkout, 'emit');
    component.checkoutPerson(1);

    expect(receptionServiceSpy.checkout).toHaveBeenCalled();
    expect(component.checkout.emit).toHaveBeenCalled();
  }));

  it('should not emit the event on checkout failure', async(() => {
    // This test will fail because the component doesn't handle errors! ALWAYS HANDLE ERRORS!

    receptionServiceSpy.checkout.and.returnValue(throwError({status: 404}));
    spyOn(component.checkout, 'emit');
    component.checkoutPerson(1);

    expect(receptionServiceSpy.checkout).toHaveBeenCalled();
    expect(component.checkout.emit).not.toHaveBeenCalled();
  }));
});
