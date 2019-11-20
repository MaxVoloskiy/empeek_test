import React from 'react'
import Comment from "../Comment/Comment";
import { connect } from 'react-redux'
import './CommentsList.css'
import {isEqual} from "underscore";

const CommentsList = ({comments}) => {
    return (<ul className={"CommentApp__CommentList"}>
        {comments.map((comment, i) =>
            <Comment
                key={i}
                text={comment}
            />
        )}
    </ul>)
};

const mapStateCommentsToProps = (state) => {
    if (isEqual(state.todos, [])) return {comments: []};
    return {
        comments: state.todos.find(todo => todo.selected).comments
    }
};

export default connect(mapStateCommentsToProps)(CommentsList);
