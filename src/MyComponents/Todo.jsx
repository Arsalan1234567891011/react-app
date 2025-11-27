import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem.jsx";
import TodoItem1 from "./TodoItem1.jsx";
import InformatioForm from "./InformatioForm";


export default function Todo() {
  
const [todos, setTodos] = useState([]);
useEffect(() => {
  const apiUrl = `${import.meta.env.VITE_API_URL}/bussiness?secret_key=${import.meta.env.VITE_SECRET_KEY}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(response => {
      setTodos(response.data);
      if (response.status === false) {
        Swal.fire({
          icon: "error",
          title: "API Error",
          text: response.message,
        });
      }
    })
    .catch(error => {
      console.error("Error fetching todos:", error);
    });
}, []);

 /* let todos1 = [
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
  ];*/


  return (
    <div className='row'>
      <div className='col-12'>
       {/*<TodoItem1 todosItems={todos1} />*/}
       {/*<TodoItem todosItems={todos} />*/}
        { <InformatioForm />}
      </div>
    </div>
  );
}
