// TodoList.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./TodoSlice"; // Assicurati di avere le azioni corrette importate

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    const [newTodo, setNewTodo] = useState("");

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            dispatch(
                addTodo({
                    id: Date.now(),
                    text: newTodo,
                })
            );
            setNewTodo("");
        }
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input
                type="text"
                placeholder="Add a new todo"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
