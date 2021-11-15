import React from 'react'
import { usersInLab } from '../../src/data/mockData'

export default function Table(props) {
  const title = props.title

  const staff = usersInLab.filter(el1 => {
    return (
      el1.name.toLowerCase() === 'eric fluckiger' ||
      el1.name.toLowerCase() === 'steve pritchett' ||
      el1.name.toLowerCase() === 'andrew hurlbut' ||
      el1.name.toLowerCase() === 'brian baker' ||
      el1.name.toLowerCase() === 'tony olsen' ||
      el1.name.toLowerCase() === 'joseph jacob'
    )
  })

  const users = usersInLab.filter(el1 => {
    return (
      el1.name.toLowerCase() !== 'eric fluckiger' &&
      el1.name.toLowerCase() !== 'steve pritchett' &&
      el1.name.toLowerCase() !== 'andrew hurlbut' &&
      el1.name.toLowerCase() !== 'brian baker' &&
      el1.name.toLowerCase() !== 'tony olsen' &&
      el1.name.toLowerCase() !== 'joseph jacob'
    )
  })

  users.sort((a, b) => a.name.localeCompare(b.name))
  staff.sort((a, b) => a.name.localeCompare(b.name))

  const staffInLab = staff.map(element => <UserList name={element.name} time={element.time} location={element.location} title={title} usersInLab={usersInLab} />)

  const userInLab = users.map(element => <UserList name={element.name} time={element.time} location={element.location} title={title} usersInLab={usersInLab} />)
  return (
    <>
      <h2 className="text-uppercase text-center text-danger">{title}</h2>
      <table className="table mytable table-striped table-hover table-dark">
        <tbody>
          {staffInLab}
          {userInLab}
        </tbody>
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
