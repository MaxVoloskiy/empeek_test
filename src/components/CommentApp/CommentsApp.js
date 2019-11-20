import React from 'react';
import {connect} from 'react-redux'
import {isEqual} from 'underscore'
import AddComment from "../AddComment/AddComment";
import CommentsList from '../CommentsList/CommentsList'
import './CommentsApp.css'

const CommentsApp = ({todoId}) => (
    <div className={"CommentsApp"}>
        <p className={"CommentsApp__header"}>Comments #{todoId}</p>
        <CommentsList />
        <AddComment />
    </div>
);

const mapStateCommentsAppToProps = (state) => {
    console.log(state)
    if (isEqual(state.todos, [])) return {todoId: null};
    return {
        todoId: state.todos.indexOf(state.todos.find(todo => todo.selected)) + 1
    }
};

export default connect(mapStateCommentsAppToProps)(CommentsApp);
