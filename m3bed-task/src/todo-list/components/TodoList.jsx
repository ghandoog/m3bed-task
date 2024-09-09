import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem 
          key={index} 
          todo={todo} 
          onToggle={() => toggleTodo(index)} 
          onRemove={() => removeTodo(index)} 
        />
      ))}
    </ul>
  );
};

export default TodoList;
