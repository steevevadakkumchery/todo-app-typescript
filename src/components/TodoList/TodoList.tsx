import React, { FunctionComponent } from 'react';
import './TodoList.scss';

type TodoListProps = {
    list?: {id: number, text: string, completed: boolean}[],
    handleToggle: Function
}

const TodoList: FunctionComponent<TodoListProps> = ({ list, handleToggle }) => {
    
    if(list && list.length > 0){
        return <ul>{list && list.map((listItem) => (
            <li key={listItem.id} className={listItem.completed ? 'completed': ''} onClick={(e) => handleToggle(listItem.id)}>{listItem.text}</li>)
        )}</ul>; 
    } else {
        return <span>Nothing to do.</span>; 
    }
}

export default TodoList;