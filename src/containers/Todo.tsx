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

    const handleSubmit = () => {

        setListOfItems((prev) => {
            setInputValue('');
            
            if(prev && prev.length){
                const id = prev[prev.length - 1].id + 1;
                return [...prev, {id, text: inputValue, completed: false}];
            } else {
                return [{id: 0, text: inputValue, completed: false}];
            }
        })
    }

    const handleItemToggle = (id: number) => {
        setListOfItems(prev => {
            const toggledItemIndex = prev?.findIndex((item) => item.id === id);
            if(toggledItemIndex !== undefined && toggledItemIndex > -1) {
                let itemToUpdate = prev && prev.slice(toggledItemIndex, toggledItemIndex + 1);
                let updatedItem = JSON.parse(JSON.stringify(itemToUpdate));;
                if(updatedItem){
                    updatedItem[0].completed = !updatedItem[0].completed;
                    return prev?.slice(0, toggledItemIndex).concat(updatedItem).concat(prev?.slice(toggledItemIndex + 1));
                }
            }
            return prev;
        });
    }
    
    return (
        <div>
            <header>Todo List</header>
            <InputBox handleOnChange={handleOnChange} inputValue={inputValue} handleSubmit={handleSubmit}/>
            <TodoList list={listOfItems} handleToggle={handleItemToggle}/>
        </div>
    );
}

export default Todo;