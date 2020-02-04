import React from 'react';
import TodoList from './TodoList';
import { shallow, mount } from 'enzyme';

describe('<TodoList />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<TodoList handleToggle={jest.fn()}/>);
    });

    describe('if list is empty', () => {
        test('should render message', () => {
            const wrapper = shallow(<TodoList handleToggle={jest.fn()}/>);
            expect(wrapper.find('span').text()).toBe('Nothing to do.');
        });

        test('should render message', () => {
            const list: {id: number, text: string, completed: boolean}[] = [];

            const wrapper = shallow(<TodoList list={list} handleToggle={jest.fn()}/>);

            expect(wrapper.find('span').text()).toBe('Nothing to do.');
        });
    });

    describe('if list has one or more items', () => {
        test('should show a simple list using li based on props', () => {
            let list = [
                {id: 1, text: 'washing', completed: false},
                {id: 2, text: 'cooking', completed: false},
                {id: 3, text: 'running', completed: false}
            ];
    
            const wrapper = shallow(<TodoList list={list} handleToggle={jest.fn()}/>);

            expect(wrapper.find('li').length).toBe(list.length);
        });
    });

    describe('list variants', () => {
        test('should show a stiked text when completed', () => {
            let list = [
                {id: 1, text: 'washing', completed: true},
                {id: 2, text: 'cooking', completed: false},
            ];
    
            const wrapper = mount(<TodoList list={list} handleToggle={jest.fn()}/>);

            expect(wrapper.find('ul li').first().hasClass('completed')).toBe(true);
        });

    });
});