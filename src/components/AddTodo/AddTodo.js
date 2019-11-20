import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../../actions";
import './AddTodo.css'

const AddTodo = ({dispatch}) => {
    let input;
    return (
        <div className={"TodoApp__AddTodo"}>
            <input
                className={"TodoApp__AddTodo--input"}
                placeholder={"Type name here..."}
                ref={node => {input = node;}}
            />
            <button
                className={"TodoApp__AddTodo--button"}
                onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}
            >
                Add new
            </button>
        </div>
    )
};

export default connect()(AddTodo);
