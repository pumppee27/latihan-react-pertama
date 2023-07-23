import React from "react";
import {PropTypes} from 'prop-types'
import Button from "./Button";

function TodoItem({todo, del, open}){
    function delById(id){
        del(id)
    }
    return(
        <div style={todoItem}>
            <p>{todo.title}</p>
            <div style={btnDua}>
                <Button text='edit' variant='success' action={()=>open(todo.id, todo.title)}/>
                <Button text='delete' variant='danger' action={()=> del(todo.id)}/>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    del:PropTypes.func.isRequired
}

export default TodoItem

const todoItem = {
    background: "#2da4f8",
    color: '#fff',
    display: 'flex',
    alignItems: "center",
    height: '3rem',
    padding: '0 1rem',
    justifyContent: 'space-between',
    margin:'0.5rem 0'
}

const btnDua = {
    display:'flex'
}