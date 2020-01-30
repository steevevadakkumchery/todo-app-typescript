import React from 'react';
import Todo from './Todo';
import { shallow } from 'enzyme';

describe('<Todo />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<Todo />);
    });

    test('should contain a title', () => {
        const wrapper = shallow(<Todo />);
        expect(wrapper.find('h1').text()).toBe('Todo List')
    })

    test('should contain an input field to add todo items', () => {
        const wrapper = shallow(<Todo />);
        expect(wrapper.contains(<input />)).toBe(true);
    })

    test('should contain a list for the todo list', () => {
        const wrapper = shallow(<Todo />);
        expect(wrapper.contains(<ul><li></li></ul>)).toBe(true);
    })
})
