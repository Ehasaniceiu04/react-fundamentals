import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

export default class ClassButton extends Component {
    handleClick(){
        alert('handle click event')
    }
  render() {
    
    return (
      <div>
        <Button variant='primary' onClick={this.handleClick}>Click</Button>
      </div>
    )
  }
}
