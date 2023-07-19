import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../features/todo/todoSlice';

export const Todo = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    dispatch(toggleTodo(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="flex items-center justify-between border p-2 my-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={handleCheckbox}
        />
        <span className={isChecked ? 'completed' : ''}>{todo.title}</span>
      </div>

      <button
        className="text-red-500 hover:text-blue-600"
        onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};
