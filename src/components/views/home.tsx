import * as React from 'react';
import { useState, useContext, } from 'react'

import Utilities from '../../mixins/utilities'
import Box from '../shared/box';
import BoxFactory from '../../factories/boxFactory';
import Button from '../shared/button';

import boxFactory from '../../hooks/factory.hook'
import BoxModel from '../../models/box.model';

const Home: React.FC = () => {
  const {createBox, logDetails,createSquare,  factoryName, coloredBox}  = boxFactory()

  const utils: Utilities = new Utilities()
  const [text, setText] = useState('Nacho')

  const [items, setItems] = useState([
    <div onClick={()=>deleteItem(0, items, setItems)} >Item 1</div>,
    <div onClick={()=>deleteItem(1, items, setItems)} >Item 1</div>,
    <div onClick={()=>deleteItem(2, items, setItems)} >Item 1</div>,

  ])

  const [boxes, setBoxes] = useState<React.ReactElement[]>([])

  
  const deleteItem = (index: number, arr: any[], stateFunc:(array:any[])=>any) => {
    const tempArr = [...arr, <h1>Fun Times</h1>]
    stateFunc(tempArr)
    console.log('item deleted')
    console.log(arr)
  }

  utils.log()


  const addBox = () => {
    const redBox = coloredBox('red')
    const boxList = [...boxes, redBox(50)]
    setBoxes(boxList)
  }

  const deleteBox =() => {
    let boxList = [...boxes]
    boxList.splice(0,1)
    setBoxes(boxList)
  }

  const handleChange= (event:React.ChangeEvent<HTMLInputElement>):void => {
    setText(event.currentTarget.value)
  }
  return (

    <div>
      <h3>Home Component</h3>
      <button onClick={addBox}>Add Box</button>
      <button onClick={deleteBox}>Delete Box</button>

      <div style= {{
      height: '100vh',
      width: '100vw',
      display:'flex',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'flex-start',
      alignItems:'flex-start'
    }} >
      {boxes}
      </div>
      <p>{text}</p>
      <input onChange={(event)=>handleChange(event)} placeholder={text} ></input>
    </div>
  )
}

export default Home