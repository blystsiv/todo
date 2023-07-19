import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 1, title: 'Learn React.js', completed: false },
  { id: 2, title: 'JavaScript tasks', completed: false },
];

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    },
    reorderTodos: (state, action) => {
      state.splice(0, state.length, ...action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, reorderTodos } =
  todoSlice.actions;

export default todoSlice.reducer;

export const selectTodos = (state) => state.todo;
