import React from 'react'
import Header from './Header'

export default function CleanroomUsers() {
  return (
    <>
      <Header title="cleanroom" size="sm" />
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
          </tr>
          <tr>
            <td>Jacob</td>
          </tr>
          <tr>
            <td colspan="2">Larry the Bird</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
