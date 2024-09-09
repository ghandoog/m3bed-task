import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (index) => {
    setTodos(todos.map((todo, i) => 
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="App my-12 mx-auto bg-indigo-200 w-fit p-12 rounded-xl">
      <h1 className='font-bold'>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList 
        todos={todos} 
        toggleTodo={toggleTodo} 
        removeTodo={removeTodo} 
      />
    </div>
  );
};

export default TodoApp;
