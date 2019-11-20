import React from 'react'
import Todo from "../Todo/Todo";
import './TodoList.css'

const TodoList = ({onDeleteClick, onSelectClick, todos}) => (
    <ul className={"TodoApp__TodoList"}>
        {todos.map(todo =>
            <Todo
                key={todo.id}
                {...todo}
                onDeleteClick={() => onDeleteClick(todo.id)}
                onSelectClick={() => onSelectClick(todo.id)}
            />
        )}
    </ul>
);

export default TodoList;
