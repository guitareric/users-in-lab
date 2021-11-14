import React from 'react'

export default function Container(props) {
  return (
    <div className="bg-dark text-white" style={{ minHeight: '100vh' }}>
      {props.children}
    </div>
  )
}
