import {connect} from "react-redux";
import React from "react";
import TodoList from "../TodoList/TodoList";
import { deleteTodo, selectTodo } from '../../actions'

const mapStateTodoListProps = (state) => ({
    todos: state.todos
});

const mapDispatchToTodoListProps = (dispatch) => ({
    onDeleteClick(id) {
        dispatch(deleteTodo(id))
    },
    onSelectClick(id){
        dispatch(selectTodo(id))
    }
});

const TodoListItems = connect(
    mapStateTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

export default TodoListItems;
