import React, { useState } from 'react';
import InputBox from '../components/InputBox';
import TodoList from '../components/TodoList';

const Todo = (props: { list?: {id: number, text: string, completed: boolean}[] }) => {

    const { list } = props;
    const [listOfItems, setListOfItems] = useState(list);
    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (value: string): void => {
        setInputValue(value);
    }
    
    return (
        <div>
            <header>Todo List</header>
            <InputBox handleOnChange={handleOnChange} inputValue={inputValue}/>
            <TodoList list={listOfItems}/>
        </div>
    );
}

export default Todo;