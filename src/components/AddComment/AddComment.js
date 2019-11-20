import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { addComment } from "../../actions";
import './AddComment.css'
import {isEqual} from "underscore";

const AddComment = ({id, dispatch}) => {
    let input;

    useEffect(() => {
        const keydownHandler = (e) => {
            if(e.keyCode===13 && e.ctrlKey) {
                dispatch(addComment(id, input.value));
                input.value = '';
            }
        };
        document.addEventListener('keydown', keydownHandler);
        return () => {
            document.removeEventListener('keydown', keydownHandler);
        };
    });

    return (
        <div className={"CommentsApp__AddComment"}>
            <img className={"CommentsApp__AddComment--image"} alt={""}/>
            <textarea
                className={"CommentsApp__AddComment--textarea"}
                ref={node => {
                    input = node;
                }}
            />
        </div>
    )
};

const mapStateAddCommentToProps = (state) => {
    if (isEqual(state.todos, [])) return {id: null};
    return {
        id: state.todos.find(todo => todo.selected).id
    }
};

export default connect(mapStateAddCommentToProps)(AddComment);
