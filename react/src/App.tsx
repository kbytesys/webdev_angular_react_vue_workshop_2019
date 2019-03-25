import React, { Component } from 'react';
import {ChecksinList} from './reception/checksin-list';
import './App.css';
import Axios from 'axios';
import {Checkin} from './models/checkin.model';
import {CheckinLog} from './models/checkinlog.model';
import {ChecksinLog} from './reception/checksin-log';

const APIURL = "http://localhost:3000";

interface AppComponentState {
  checksin: Array<Checkin>;
  checksinLog: Array<CheckinLog>;
}

function createEmptyState(): AppComponentState {
  return {
    checksin: [],
    checksinLog: []
  };
}

class App extends Component<any, AppComponentState> {
  constructor(props: any) {
    super(props);
    this.state = createEmptyState();
    this.refreshData = this.refreshData.bind(this);
  }

  refreshData() {
    let newState = createEmptyState();

    Axios.get(`${APIURL}/checkin`)
        .then(response => { newState.checksin = response.data as Array<Checkin>; return newState; })
        .then((newState) => Axios.get(`${APIURL}/checkinlog`)
            .then(response => {
              newState.checksinLog = response.data.map(
                (item: any) => { return { date: new Date(Date.parse(item.date)), message: item.message} }) as Array<CheckinLog>;
              this.setState(newState);
            }));
  }

  componentDidMount() {
    this.refreshData();
  }

  render() {
    return (
      <div className="App">
        <h1>Creepy Artist Theatre Congress Center</h1>
        <ChecksinList checksin={this.state.checksin} onCheckout={this.refreshData}/>
        <ChecksinLog checksinLog={this.state.checksinLog} />
      </div>
    );
  }
}

export default App;
