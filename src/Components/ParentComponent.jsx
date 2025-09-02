import React, {Component} from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component{

  ParentFunction=()=>{
    alert('Parent Function')
  }
  render(){
    return(
      <div>
        <ChildComponent ParentFunction={this.ParentFunction}/>
      </div>
    )
  }
}
export default ParentComponent
