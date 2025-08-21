import React, {Component} from 'react'

class OnClickChangeName extends Component{
  constructor(){
    super();

    this.state={
      name: "Priyanka"
    }
  }
  ChangeName(){
    this.setState({
      name: "Preethy"
    }

    )
  }
  render(){
    return(
    <div>
      <h1>{this.state.name}</h1>
      <button onClick={()=>this.ChangeName()}>Change Name</button>
    </div>
    )
  }
}
export default OnClickChangeName
