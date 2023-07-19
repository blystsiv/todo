import { nanoid } from '@reduxjs/toolkit';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

export const Form = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = (e) => setTitle(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: nanoid(),
      compleated: false,
      title,
    };

    dispatch(addTodo(newTodo));

    setTitle('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task"
          className="flex-grow p-2 border border-gray-300 rounded-l"
          value={title}
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r"
          disabled={!title.trim()}>
          Add Task
        </button>
      </div>
    </form>
  );
};
