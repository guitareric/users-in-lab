import React from 'react'
import { usersInLab } from '../../src/data/mockData'

export default function Table(props) {
  const title = props.title
  let userInLab = usersInLab.map(element => <UserList name={element.name} time={element.time} location={element.location} title={title} />)

  return (
    <>
      <h2 className="text-uppercase text-center">{title}</h2>
      <table className="table-sm table-hover table-dark">
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
      className = 'text-capitalize font-weight-bold text-warning'
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
