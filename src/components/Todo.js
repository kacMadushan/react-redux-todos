import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/todos';

const Todo = ({ dispatch, id, text }) => (
    <li className="list-group-item todo-item">
        <p className="todo">{text}</p>
        <button 
            className="btn remove-btn"
            onClick={() => { dispatch(removeTodo({ id })) }}
        >
            Remove
        </button>
    </li>
);

export default connect()(Todo);