import React from 'react'
import { usersInLab } from '../../src/data/mockData'

export default function Table(props) {
  const title = props.title
  const userInLab = usersInLab.map(element => <UserList name={element.name} time={element.time} location={element.location} title={title} usersInLab={usersInLab} />)
  return (
    <>
      <h2 className="text-uppercase text-center text-danger">{title}</h2>
      <table className="table mytable table-striped table-hover table-dark">
        <tbody>{userInLab}</tbody>
      </table>
    </>
  )
}

function UserList(props) {
  const name = props.name
  const time = props.time
  const location = props.location
  const title = props.title
  const usersInLab = props.usersInLab
  const usersInLocation = usersInLab.length
  let className = 'text-capitalize font-weight-bold'

  if (location === title) {
    if (
      (name.toLowerCase() === 'eric fluckiger') |
      (name.toLowerCase() === 'steve pritchett') |
      (name.toLowerCase() === 'tony olsen') |
      (name.toLowerCase() === 'joseph jacob') |
      (name.toLowerCase() === 'andrew hurlbut') |
      (name.toLowerCase() === 'brian baker')
    ) {
      className = 'text-capitalize font-weight-bold text-success'
    }
    return (
      <>
        <tr>
          <td className={className}>
            <h6>
              {name} {time}
            </h6>
          </td>
        </tr>
      </>
    )
  }
  return null
}
