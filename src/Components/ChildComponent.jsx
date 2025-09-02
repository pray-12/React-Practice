import React, {Component} from 'react'

class ChildComponent extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.ParentFunction}>Click Me</button>
      </div>
    )
  }
}
export default ChildComponent
