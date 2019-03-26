import Axios from 'axios';
import {CheckinModel} from '@/models/checkin.model';
import {RoomModel} from '@/models/room.model';
import {CheckinlogModel} from '@/models/checkinlog.model';

const APIURL = 'http://localhost:3000';

export function apiGetRooms(): Promise<RoomModel[]> {
    return Axios.get(`${APIURL}/room`)
        .then((response) => response.data as RoomModel[]);
}

export function apiGetChecksin(roomId?: number): Promise<CheckinModel[]> {
    if (roomId) {
        return Axios.get(`${APIURL}/checkin`, {params: {room: roomId}})
            .then((response) => response.data as CheckinModel[]);
    }

    return Axios.get(`${APIURL}/checkin`)
        .then((response) => response.data as CheckinModel[]);
}

export function apiGetChecksinLog(roomId?: number): Promise<CheckinlogModel[]> {
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

function convertCheckinLog(data: any): CheckinlogModel {
    return {
        date: new Date(Date.parse(data.date)),
        message: data.message,
    };
}
