import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TodoInitialState, TodoType } from "../types/TodoAppTypes"


const initialState: TodoInitialState = {
    todos: [],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        createTodo: (state: TodoInitialState, action: PayloadAction<TodoType>) => {
            state.todos = [...state.todos, action.payload];
        },
        //! Dışarıdan Bana Gelecek Değer ne ise o türde PayloadAction<GelecekDeğerinTürü> olmalı
        removeTodoById: (state: TodoInitialState, action: PayloadAction<number>) => {
            state.todos = [...state.todos.filter((todo: TodoType) => todo.id !== action.payload)]
        },
        updateTodoById : (state: TodoInitialState, action:PayloadAction<{id:number, newContent:string}>) =>{
            const {id, newContent} = action.payload;
            const todo = state.todos.find((todo:TodoType)=> todo.id == id)
            if(todo){
                todo.content = newContent;
            }
        }
    }
})

export const { createTodo, removeTodoById,updateTodoById } = todoSlice.actions
export default todoSlice.reducer