import React from 'react'

function Person(props) {
  return (
    <li>{props.person.firstName} {props.person.lastName} {props.key}</li>
  )
}

export default Person
