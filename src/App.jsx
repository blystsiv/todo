import React from 'react';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h1 className="text-2xl font-semibold mb-4 text-center">Todo List</h1>
        <Form />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
