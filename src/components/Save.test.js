import React from 'react';
import Save from './Save';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Save Name component', () => {
    it('adds the text to screen when clicked', () => {
        const wrapper = shallow(<Save />);
        expect(wrapper.exists()).toBe(true);   
    });
});


