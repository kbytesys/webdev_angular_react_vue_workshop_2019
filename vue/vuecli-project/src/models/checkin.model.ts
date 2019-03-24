import {PersonModel} from './person.model';
import {RoomModel} from './room.model';

export interface CheckinModel {
    id: number;
    person: PersonModel;
    room: RoomModel;
}
