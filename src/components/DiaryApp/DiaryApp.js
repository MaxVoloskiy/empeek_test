import React from 'react'
import TodoApp from "../TodoApp/TodoApp";
import CommentsApp from "../CommentApp/CommentsApp";
import './DiaryApp.css'

const DiaryApp = () => (
    <div className={"DiaryApp"}>
        <div className={"DiaryApp__header"}>
            <div className={"DiaryApp__header--content"}>
                <p className={"DiaryApp__header--content-head"}>DIARY APP</p>
                <p className={"DiaryApp__header--content-comment"}>Comment with no sense</p>
            </div>
        </div>
        <div className={"DiaryApp__main"}>
            <TodoApp />
            <CommentsApp />
        </div>
    </div>
);

export default DiaryApp;
