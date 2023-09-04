// store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./TodoSlice"; // Sostituisci "todoSlice" con il nome del tuo riduttore

const store = configureStore({
    reducer: {
        todos: todoReducer, // Sostituisci "todos" con il nome del tuo stato
    },
});

export default store;