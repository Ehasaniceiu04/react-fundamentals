import React from 'react'

function FunctionButton() {
    function handlClick(){
        alert('handle click event from functional component')
    }
  return (
    <div>
      <button onClick={handlClick}>Click me</button>
    </div>
  )
}

export default FunctionButton
