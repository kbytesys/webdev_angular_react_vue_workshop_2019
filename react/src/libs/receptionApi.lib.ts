import Axios from 'axios';
import {Room} from '../models/room.model';
import {Checkin} from '../models/checkin.model';
import {CheckinLog} from '../models/checkinlog.model';

const APIURL = 'http://localhost:3000';

export function apiGetRooms(): Promise<Room[]> {
    return Axios.get(`${APIURL}/room`)
        .then((response) => response.data as Room[]);
}

export function apiGetChecksin(roomId?: number): Promise<Checkin[]> {
    if (roomId) {
        return Axios.get(`${APIURL}/checkin`, {params: {room: roomId}})
            .then((response) => response.data as Checkin[]);
    }

    return Axios.get(`${APIURL}/checkin`)
        .then((response) => response.data as Checkin[]);
}

export function apiGetChecksinLog(roomId?: number): Promise<CheckinLog[]> {
    if (roomId) {
        return Axios.get(`${APIURL}/checkinlog`, {params: {room: roomId}})
            .then((response) => response.data.map(convertCheckinLog));
    }

    return Axios.get(`${APIURL}/checkinlog`)
        .then((response) => response.data.map(convertCheckinLog));
}

export function apiCheckout(checkinId: number): Promise<any> {
    return Axios.delete(`${APIURL}/checkin/${checkinId}`);
}

function convertCheckinLog(data: any): CheckinLog {
    return {
        date: new Date(Date.parse(data.date)),
        message: data.message,
    };
}
