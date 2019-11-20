import React from 'react'
import './Todo.css'

const Todo = ({onDeleteClick, onSelectClick, text, comments, selected}) => (
    <li
        className={!selected ? "TodoApp__TodoList--todo" : "TodoApp__TodoList--todo-selected"}
    >
        <div
            className={"TodoApp__TodoList--todo-text"}
            onClick={onSelectClick}
        >
            <p>{text}</p>
            <span className={"TodoApp__TodoList--todo-number"}>
                {comments.length}
            </span>
        </div>
        <button
            className={"TodoApp__TodoList--todo-button"}
            onClick={onDeleteClick}
            disabled={selected}
        >
            Delete
        </button>
    </li>
);

export default Todo;
