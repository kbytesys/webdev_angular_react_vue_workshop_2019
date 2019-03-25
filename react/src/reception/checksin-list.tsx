import {Component} from 'react';
import React from 'react';
import './checksin-list.css';
import {Checkin} from '../models/checkin.model';
import Axios from 'axios';

const APIURL = "http://localhost:3000";

export interface ChecksinListProps {
    checksin: Array<Checkin>;
    onCheckout?: () => void;
}

export class ChecksinList extends Component<ChecksinListProps> {
    constructor(props: ChecksinListProps) {
        super(props);
        this.RenderCheckinListItem = this.RenderCheckinListItem.bind(this);
    }

    render() {
        return (
            <div className="reception-guest-list">
                <h3>Guest list</h3>
                <div className="reception-guest-list-container">
                    <table>
                        <thead className="reception-guest-list-header">
                        <tr>
                            <th>Room</th>
                            <th>Person</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                            {this.props.checksin.map(this.RenderCheckinListItem)}
                        </tbody>
                    </table>
                </div>
            </div>);
    };

    RenderCheckinListItem(checkin: Checkin): JSX.Element {
        return (<tr key={checkin.id}>
            <td>{checkin.room.name}</td>
            <td>{checkin.person.name}</td>
            <td><a href="javascript:void(0)" onClick={(() => this.checkoutPerson(checkin.id))} >checkout</a></td>
        </tr>);
    }


    private checkoutPerson(checkinId: number) {
        Axios.delete(`${APIURL}/checkin/${checkinId}`).then(
            () => {
                if (this.props.onCheckout) {
                    this.props.onCheckout();
                }
            }
        )
    }
}
