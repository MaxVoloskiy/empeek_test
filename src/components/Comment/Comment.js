import React from 'react'
import './Comment.css'

const Comment = ({text}) => (
    <li className={"CommentsApp__CommentsList--comment"}>
        <div><img className={"CommentsApp__CommentsList--comment-image"} alt={""}/></div>
        {text}
    </li>
);

export default Comment;
