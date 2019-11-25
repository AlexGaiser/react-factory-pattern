import React, { useState } from 'react'

interface props {
  onClick():void 
}





function Button(props:props) {

  const [color, setcolor] = useState('red')


  return (
    <button onClick ={props.onClick} style={{backgroundColor:color}} >Button
      
    </button>
  )
}

export default Button




