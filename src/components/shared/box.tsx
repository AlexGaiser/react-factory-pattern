import * as React from 'react'
import BoxModel from '../../models/box.model'


export default function box(props: BoxModel) {
  
  const boxStyle = {
    backgroundColor: props.color,
    height: props.height,
    width: props.width
  }

  return (
    <div style={boxStyle}  >
      {props.children}
    </div>
  )
}
