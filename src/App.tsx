import React, { useState } from 'react';
// import { Todo } from './types';
import './App.css';

const todos: Todo[] = [
  { text: 'Read a book', completed: true },
  { text: 'Walk the dog', completed: false },
];

const App: React.FC = () => {
  const [appTodos, setTodos] = useState<Todo[]>(todos);
  return (
    <div className='container'>
      {/*  input with a button */}
      {/* todos list */}
      {/* todos list will have a todoItem */}
      <div className='row'>
        <div className='col'>
          <ul className='list-group'>
            {appTodos.map((todo, index) => {
              return (
                <li className='list-group-item' key={index}>
                  {todo.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
