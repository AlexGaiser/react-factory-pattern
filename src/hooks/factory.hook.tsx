import * as React from 'react';
import Box from "../components/shared/box";
import { ReactNode } from "react";


export default function boxFactory (){


  const logDetails=(details: string) => {
    console.log(details)
  }
  const ranColor = ():string =>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  const createBox = (height: string, width: string, color: string, onClick?: Function, children?: ReactNode): React.ReactElement => {
    return  Box({color:color, height: height, width:width, onClick: onClick, children: children, key: 1})
  }

  const factoryName = 'This is the Box Factory'


  const createSquare = (height: number, color: string, onClick?: Function): React.ReactElement => {
    const dim = height.toString() + 'px'
    if(color.toLowerCase()=== 'random') {
      color = ranColor()
    }
    const key = new Date().getTime()
    
    
    return  Box({color:color, height: dim, width:dim, onClick: onClick, key: key})
  }


  const coloredBox = (color: string) => {
      const create = (height: number) =>{
        return createSquare(height, color)
      }

    return create
  }



    



  return {logDetails, createBox, createSquare, factoryName, coloredBox}
}

