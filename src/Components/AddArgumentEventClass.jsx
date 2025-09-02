import React, {Component} from 'react'

class AddArgumentEventClass extends Component{
  HelloFunction(name){
    alert(`Hello ${name}`)
  }
 render(){
  return(
    <div>
      <button onClick={()=>this.HelloFunction('Akshitha')}>Click Me</button>
    </div>
  )
 }
}
 export default AddArgumentEventClass
