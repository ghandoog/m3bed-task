import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo({ text: input, completed: false });
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        className='p-2 rounded-lg mr-4'
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Add a new todo" 
      />
      <button  type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
