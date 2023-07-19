import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../features/todo/todoSlice';
import { Todo } from './Todo';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
