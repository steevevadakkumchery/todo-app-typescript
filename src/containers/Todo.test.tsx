import React from 'react';
import Todo from './Todo';
import InputBox from '../components/InputBox';
import TodoList from '../components/TodoList';
import { shallow, mount } from 'enzyme';

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
            expect(wrapper.find(InputBox)).toHaveLength(1);
        });
    
        test('should contain a list for the todo list', () => {
            const wrapper = shallow(<Todo />);
            expect(wrapper.find(TodoList)).toHaveLength(1);
        });
    });

    describe('when a list is passed down as props to Todo', () => {
        test('should forward prop to TodoList component', () => {
            const listOfTodos = [ {id: 1, text: 'washing', completed: false},  {id: 1, text: 'reading', completed: false}];
            const wrapper = shallow(<Todo list={listOfTodos}/>);
            const todoListComponent = wrapper.find(TodoList);

            expect(todoListComponent.props().list).toEqual(listOfTodos);
        });
    });

    describe('handleChangeInput function', () => {
        test('handleChangeInput is called when a value is entered in InputBox', () => {
            const mountedWrapper = mount(<Todo />);
            const inputField = mountedWrapper.find('input');
            const inputValue = 'new value';

            inputField.simulate('change', { target: { value: inputValue} });
            expect(mountedWrapper.find(InputBox).props().inputValue).toEqual(inputValue);
        })
    })
});
