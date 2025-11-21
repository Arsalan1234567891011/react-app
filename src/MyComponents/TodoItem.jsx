import React from 'react'

export default function TodoItem(props) {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">Dscription</th> 
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{props.todosItems['id']}</th>
            <td>{props.todosItems['title']}</td>
            <td>{props.todosItems['description']}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
