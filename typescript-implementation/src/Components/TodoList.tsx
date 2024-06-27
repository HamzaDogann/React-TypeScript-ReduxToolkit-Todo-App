import React from 'react'
import Todo from "./Todo";
import { RootState } from '../Redux/Store';
import { useSelector } from 'react-redux';
import { TodoType } from '../types/TodoAppTypes';

const TodoList = () => {

    const { todos } = useSelector((state: RootState) => state.todo)
   
    return (
        <div>
           {todos && todos.map((todo:TodoType)=> (
            <Todo key={todo.id} todoProps={todo} />
           ))}
        </div>
    )
}

export default TodoList