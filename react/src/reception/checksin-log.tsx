import {CheckinLog} from '../models/checkinlog.model';
import {Component} from 'react';
import React from 'react';
import './checksin-log.css';

export interface ChecksinLogProps {
    checksinLog: Array<CheckinLog>;
}

export class ChecksinLog extends Component<ChecksinLogProps> {
    render() {
        return (
            <div className="reception-log">
                <h3>Log</h3>
                <div className="reception-log-container">
                    <table>
                        <thead className="reception-log-header">
                        <tr>
                            <th>Date</th>
                            <th>Event</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.props.checksinLog.map(this.RenderCheckinLogItem)}
                        </tbody>
                    </table>
                </div>
            </div>);
    };

    RenderCheckinLogItem(checkinLog: CheckinLog): JSX.Element {
        return (<tr>
            <td>{checkinLog.date.toLocaleDateString()} {checkinLog.date.toLocaleTimeString()}</td>
            <td>{checkinLog.message}</td>
        </tr>);
    }
}
