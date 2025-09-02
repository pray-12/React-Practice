import React from 'react'

function Event(){
  function ClickMe(){
    alert('Button clicked')
  }
  return(
    <div>
      <button onClick={ClickMe}>Click Me</button>
    </div>
  )
}
export default Event
