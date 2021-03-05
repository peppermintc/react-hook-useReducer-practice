import React from 'react';
import { ACTIONS } from './App';

export default function TODO({ todo, dispatch }) {
    return (
        <div>
            <span style={{ color: todo.complete ? 'blue' : 'black' }}>{todo.name}</span>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE, payload: { id: todo.id } })}>Toggle</button>
            <button onClick={() => dispatch({ type: ACTIONS.REMOVE, payload: { id: todo.id } })}>Delete</button>
        </div>
    );
}