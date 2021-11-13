import React from 'react'

export default function Container(props) {
  return (
    <div className="container-fluid bg-dark" style={{ minHeight: '100vh' }}>
      {props.children}
    </div>
  )
}
