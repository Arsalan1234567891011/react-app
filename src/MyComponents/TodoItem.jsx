import React from 'react'

export default function TodoItem(props) {
  return (
    <>
    <h4>Bussiness Detail</h4>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
             <th scope="col">Slug</th>
            <th scope="col">Description</th> 
          </tr>
        </thead>
        <tbody>
          {props.todosItems.map(todo => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.slug}</td>
              <td>{todo.name}</td>
              <td>{todo.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
