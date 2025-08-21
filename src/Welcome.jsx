// import React, {Component} from 'react'

// class Welcome extends Component{
//    render(){
//     return <p> Hi how are yo u</p>
//    }
// }

// export default Welcome

import React from 'react'

let name = 'Pray'
const car ={name: 'BMW', model: '2025'}
class Welcome extends React.Component{
  render(){
    // return <p> Hi how are yo u ray</p>
    // return <h3>Hi how are you {name}</h3>
    return <h3>Hi how are you {name} and {car.name}</h3>
  }
}

export default Welcome
