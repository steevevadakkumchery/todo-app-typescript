import React from 'react';
import InputBox from './InputBox';
import { shallow } from 'enzyme';

describe('<InputBox />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<InputBox />);
    });

    test('should contain an input field', () => {
        const wrapper = shallow(<InputBox />);
        expect(wrapper.contains(<input />)).toBe(true);
    });
})