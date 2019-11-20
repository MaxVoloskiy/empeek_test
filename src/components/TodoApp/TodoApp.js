import React from 'react';
import AddTodo from "../AddTodo/AddTodo";
import TodoListItems from '../TodoListItems/TodoListItems'
import './Todo.css'

const TodoApp = () => (
    <div className={"TodoApp"}>
        <p className={"TodoApp__header"}>Items</p>
        <AddTodo />
        <TodoListItems />
    </div>
);

export default TodoApp;
