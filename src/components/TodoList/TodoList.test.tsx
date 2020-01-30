import React from 'react';
import TodoList from './TodoList';
import { shallow } from 'enzyme';

describe('<TodoList />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<TodoList />);
    });

    test('should render a unordered list', () => {
        const wrapper = shallow(<TodoList />);
        expect(wrapper.find('ul').length).toBe(1);
    });
})