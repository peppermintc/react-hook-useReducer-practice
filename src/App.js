import React, { useReducer, useState } from 'react';
import Todo from './Todo';

export const ACTIONS = {
  ADD: 'add',
  REMOVE: 'remove',
  TOGGLE: 'toggle'
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD:
      return [...todos, newTodo(action.payload)]
    case ACTIONS.REMOVE:
      return todos.filter(todo => todo.id !== action.payload.id);
    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    default:
      return todos;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ 
      type: ACTIONS.ADD,
      payload: text
    });
    
    setText('')
  } 

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <button onClick={handleSubmit}>add</button>
      </form>
      {todos.map((todo) => <Todo key={todo.id} todo={todo} dispatch={dispatch} />)}
    </>
  );
}
