import React, { FunctionComponent } from 'react';

type TodoListProps = {
    list?: {id: number, text: string, completed: boolean}[]
}

const TodoList: FunctionComponent<TodoListProps> = ({ list }) => {
    
    if(list && list.length > 0){
        return <ul>{list && list.map((listItem) => <li key={listItem.id}>{listItem}</li>)}</ul>; 
    } else {
        return <span>Nothing to do.</span>; 
    }
}

export default TodoList;