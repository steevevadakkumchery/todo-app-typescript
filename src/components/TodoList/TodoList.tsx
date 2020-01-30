import React from 'react';

const TodoList = (props: { list?: {id: number, text: string, completed: boolean}[] }) => {
    const { list } = props;
    
    if(list && list.length){
        return <ul>{list && list.map((listItem) => <li key={listItem.id}>{listItem}</li>)}</ul>; 
    } else {
        return <span>Nothing to do.</span>; 
    }
}

export default TodoList;