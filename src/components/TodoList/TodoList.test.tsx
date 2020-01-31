import React from 'react';
import TodoList from './TodoList';
import { shallow } from 'enzyme';

describe('<TodoList />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<TodoList />);
    });

    describe('if list is empty', () => {
        test('should render message', () => {
            const wrapper = shallow(<TodoList />);
            expect(wrapper.find('span').text()).toBe('Nothing to do.');
        });

        test('should render message', () => {
            const list: {id: number, text: string, completed: boolean}[] = [];

            const wrapper = shallow(<TodoList list={list} />);

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
    
            const wrapper = shallow(<TodoList list={list} />);

            expect(wrapper.find('li').length).toBe(list.length);
        });
    });
});