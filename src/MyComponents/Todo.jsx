import React from 'react'
import TodoItem from "./TodoItem.jsx";

export default function Todo() {
  let todos = [
    {
      id : 1,
      title : "Title 1",
      description : "Description 1",
    },
    {
      id : 2,
      title : "Title 2",
      description : "Description 2",
    },
  ];


  return (
    <div className='row' >
      <div className='col-12' >
        {todos.map(todo => (
          <TodoItem key={todo.id} todosItems={todo} />
        ))}
      </div>
    </div>
  );
}

