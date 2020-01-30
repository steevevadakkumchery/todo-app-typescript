import React from 'react';
import Todo from './Todo';
import InputBox from '../components/InputBox';
import TodoList from '../components/TodoList';
import { shallow } from 'enzyme';

describe('<Todo />', () => {
    test('should render without crashing', () => {
        const wrapper = shallow(<Todo />);
    });

    describe('these elements should be displayed with minimum props', () => {
        test('should contain a title', () => {
            const wrapper = shallow(<Todo />);
            expect(wrapper.find('header').text()).toBe('Todo List')
        });
    
        test('should contain <InputBox /> to add todo items', () => {
            const wrapper = shallow(<Todo />);
            expect(wrapper.contains(<InputBox />)).toBe(true);
        });
    
        test('should contain a list for the todo list', () => {
            const wrapper = shallow(<Todo />);
            expect(wrapper.contains(<TodoList />)).toBe(true);
        });
    });

    describe('when a list is passed down as props to Todo', () => {
        test('should forward prop to TodoList component', () => {
            const listOfTodos = ['writing', 'reading'];
            const wrapper = shallow(<Todo list={listOfTodos}/>);
            const todoListComponent = wrapper.find(TodoList);

            expect(todoListComponent.props().list).toEqual(listOfTodos);
        });



    });
});
