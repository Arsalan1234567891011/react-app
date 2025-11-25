import React from 'react'

export default function TodoItem1(props) {
  return (
    <>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th> 
          </tr>
        </thead>
        <tbody>
          {props.todosItems.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
