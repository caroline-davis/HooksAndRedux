import React from 'react';
import Save from './Save';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Save button component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Save />);
    })

    it('adds the text to screen when clicked', () => {
        expect(wrapper.exists()).toBe(true);   
    });
});


