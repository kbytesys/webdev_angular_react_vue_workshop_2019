import {CheckinlogModel} from '@/models/checkinlog.model';

export function convertCheckinLog(data: any): CheckinlogModel {
    return {
        date: new Date(Date.parse(data.date)),
        message: data.message,
    };
}
