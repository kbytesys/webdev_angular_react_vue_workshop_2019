import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import ChecksinLog from '@/components/ChecksinLog.vue';

describe('ChecksinLog.vue', () => {
  it('render checksinLog component', () => {
    const wrapper = shallowMount(ChecksinLog, {
      propsData: { checksinLog: [{date: new Date(), message: 'message1'}]},
    });
    expect(wrapper.element.querySelectorAll('tbody tr').length).to.eq(1);
  });
});
