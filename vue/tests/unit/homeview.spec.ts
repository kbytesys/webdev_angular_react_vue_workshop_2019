import MockAdapter from 'axios-mock-adapter';
import Axios from 'axios';
import {shallowMount} from '@vue/test-utils';
import {expect} from 'chai';
import Home from '@/views/Home.vue';

describe('Home.vue', () => {
    const axiosMock = new MockAdapter(Axios);

    beforeEach(() => {
        axiosMock.reset();
    });

    it('render home view', (done) => {
        axiosMock.onGet('http://localhost:3000/checkin').reply(200,
            [{id: 1, room: {id: 1, name: 'room1'}, person: {name: 'person1'}}]);
        axiosMock.onGet('http://localhost:3000/checkinlog').reply(200,
            []);

        const wrapper = shallowMount(Home, { propsData: { } });
        wrapper.vm.$nextTick(() => {
            setTimeout(() => {
                const homeObject: Home = wrapper.vm as Home;
                expect(axiosMock.history.get.length).eq(2);
                expect(homeObject.checksin.length).eq(1);
                done();
            }, 100);
        });
    });
});
