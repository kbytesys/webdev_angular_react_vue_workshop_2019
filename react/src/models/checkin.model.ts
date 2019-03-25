import {Person} from './person.model';
import {Room} from './room.model';

export interface Checkin {
    id: number;
    person: Person;
    room: Room;
}
