import React, { useState } from 'react'
import { IoMdRemoveCircleOutline } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

import { FaEdit } from "react-icons/fa";
import { TodoType } from '../types/TodoAppTypes';
import { useDispatch } from 'react-redux';
import { removeTodoById, updateTodoById } from '../Redux/todoSlice';

interface TodoProps {
    todoProps: TodoType;
}


const Todo = ({ todoProps }: TodoProps) => {

    const { id, content } = todoProps;

    const [isUpdateMode, setIsUpdateMode] = useState(false);
    const [newContent, setNewContent] = useState<string>(content);

    const dispatch = useDispatch();


    // Remove Function
    const handleRemoveTodo = () => {
        dispatch(removeTodoById(id));
    }

    //Update Function

    const handleUpdateTodo = () => {
        setIsUpdateMode(!isUpdateMode);
    }

    const handleUpdateConfirm = () => {
        if (newContent.trim().length == 0) {
            alert("todo giriniz");
            return;
        }
        const updatedContent: string = newContent;
        dispatch(updateTodoById({ id, newContent: updatedContent }));
        setIsUpdateMode(false);
    }

    return (
        <div className='todo-box'>
            {
                isUpdateMode
                    ? <input className='update-input' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewContent(e.target.value)} value={newContent} />
                    : <div>{content}</div>
            }

            <div>
                {
                    isUpdateMode
                        ?
                        <FaCircleCheck onClick={handleUpdateConfirm} className='icons icon-update' />
                        :
                        <>
                            <IoMdRemoveCircleOutline onClick={handleRemoveTodo} className='icons' style={{ marginRight: "10px" }} />
                            <FaEdit onClick={handleUpdateTodo} className='icons' />
                        </>
                }
            </div>
        </div>

    )
}

export default Todo