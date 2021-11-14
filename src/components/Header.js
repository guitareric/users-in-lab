import React from 'react'

export default function Header(props) {
  const title = props.title
  const size = props.size
  if (size==='lg'){
  return <h1 className="text-center text-uppercase">{title}</h1>
  }
   if (size==='md'){
  return <h2 className="text-center text-uppercase">{title}</h2>
  }
   if (size==='sm'){
  return <h3 className="text-center text-uppercase">{title}</h3>
  }
  return null
  
}
