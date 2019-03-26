import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MockAdapter from 'axios-mock-adapter';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Axios from 'axios';
import {shallow} from 'enzyme';

describe('Main application', () => {
  const axiosMock = new MockAdapter(Axios);
  enzyme.configure({ adapter: new Adapter() });

  beforeEach(() => {
    axiosMock.reset();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('fetch data and update the state', done => {
    axiosMock.onGet('http://localhost:3000/checkin').reply(200,
        [{id: 1, room: {id: 1, name: 'room1'}, person: {name: 'person1'}}]);
    axiosMock.onGet('http://localhost:3000/checkinlog').reply(200,
        []);

    const component = shallow(<App debug />);
    setTimeout(() => {
      expect(axiosMock.history.get.length).toEqual(2);
      expect(component.state().checksin.length).toEqual(1);
      done();
    }, 100);
  });
});
