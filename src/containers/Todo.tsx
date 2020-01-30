import React from 'react';
import InputBox from '../components/InputBox';
import TodoList from '../components/TodoList';

const Todo = () => {
    return (
        <div>
            <header>Todo List</header>
            <InputBox />
            <TodoList />
        </div>
    );
}

export default Todo;