import React, { Component } from 'react'
/*
//

const BarraDeProgreso = (props) =>{
  return (
    <div/>
  )
}
*/

/* versión ES6
class BarraDeProgreso extends Component {
  reder(props) {
    console.log(this.props)
    return (
      <div/>
    )
  }
}*/

class BarraDeProgreso extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progreso: 0,
      contador: 0
    }
  }

  render() {
    console.log('Props: ', this.props)

    return (
      <div>
        <h1>
          {this.state.contador}
        </h1>
        <div
          onClick={() => {
            this.setState({
              contador: this.state.contador - 1
            })
          }}
        >
          RESTAR
        </div>
        <div
          onClick={() => {
            this.setState({
              contador: this.state.contador + 1
            })
          }}
        >
          SUMAR
        </div>
      </div>
    )
  }
}

export default BarraDeProgreso