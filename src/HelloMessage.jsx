import React from 'react'

function HelloMessage(props){
  return (
    <div>
      <h1>Hello Guys {props.name}</h1>
      <h1>Age {props.age}</h1>
      {props.children}
    </div>
  )
}
export default HelloMessage
