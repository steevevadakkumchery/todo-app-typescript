import React from 'react';
import './App.css';
import Todo from './containers/Todo';
import getCookie from './helpers/getCookie';

const App: React.FC = () => {

  let todoListCookieValue = getCookie('list');
  let todoList: {id: number, text: string, completed: boolean}[] = [];
  if(todoListCookieValue) {
    todoList = JSON.parse(todoListCookieValue).todoList;
  } else {
    document.cookie = `list=${JSON.stringify({todoList: []})}`;
  }

  return (
    <div className="App">
      <Todo list={todoList} />
    </div>
  );
}

export default App;
