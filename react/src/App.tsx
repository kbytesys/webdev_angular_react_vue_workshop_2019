import React, { Component } from 'react';
import {ChecksinList} from './reception/checksin-list';
import './App.css';
import {Checkin} from './models/checkin.model';
import {CheckinLog} from './models/checkinlog.model';
import {ChecksinLog} from './reception/checksin-log';
import {apiGetChecksin, apiGetChecksinLog} from './libs/receptionApi.lib';

interface AppComponentState {
  checksin: Array<Checkin>;
  checksinLog: Array<CheckinLog>;
}

interface AppComponentProps {}

function createEmptyState(): AppComponentState {
  return {
    checksin: [],
    checksinLog: []
  };
}

class App extends Component<AppComponentProps, AppComponentState> {
  constructor(props: AppComponentProps) {
    super(props);
    this.state = createEmptyState();
    this.refreshData = this.refreshData.bind(this);
  }

  refreshData() {
    let newState = createEmptyState();

    apiGetChecksin()
        .then(data => { newState.checksin = data; return newState; })
        .then((newState) => apiGetChecksinLog()
            .then(data => {
              newState.checksinLog = data;
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
