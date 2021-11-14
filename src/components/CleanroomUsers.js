import React from 'react'
import Header from './Header'
import { usersInLab } from '../../src/data/mockData'

export default function CleanroomUsers() {
  let userInLab = usersInLab.map(element => <UserList name={element.name} time={element.time} location={element.location} />)
  return (
    <>
      <Header title="cleanroom" size="sm" />
      <table className="table table-hover table-dark">
        <tbody>{userInLab}</tbody>
      </table>
    </>
  )
}

function UserList(props) {
  const name = props.name
  const time = props.time
  const location = props.location
  return (
    <>
      <tr>
        <td className="text-capitalize font-weight-bold">
          <h4>
            {name} {time}
          </h4>
        </td>
      </tr>
    </>
  )
}
