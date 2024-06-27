import { useState } from "react";
import { useDispatch } from "react-redux"
import { createTodo } from "../Redux/todoSlice";
import { TodoType } from "../types/TodoAppTypes";

const TodoCreate = () => {
    const dispatch = useDispatch();

    const [newTodo, setNewTodo] = useState<string>('');

    const handleCreateTodo = () => {
        if (newTodo.trim().length == 0) {
            alert("todo giriniz");
            return;
        }

        const payload: TodoType = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        dispatch(createTodo(payload));
        setNewTodo('');
    }

    return (
        <div className="todo-create">
            <input
                placeholder="Todo Giriniz"
                type="text"
                value={newTodo}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewTodo(e.target.value)}
            />
            <button onClick={handleCreateTodo}>Oluştur</button>
        </div>
    )
}

export default TodoCreate