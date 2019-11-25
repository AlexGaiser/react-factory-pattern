import BoxModel from "../models/box.model";
import Box from "../components/shared/box";
import { ReactElement } from "react";

export default class BoxFactory {
  public create (height: string, width: string, color: string): ReactElement {
    return  Box({color:color, height: height, width:width, key: 1})
  }


  public createShrinkingBoxes(height: number, decrement: number): ReactElement[] {
    
    
    const boxes: ReactElement[] = [] 
    let tempHeight = height
    
    while(tempHeight >=0) {
      const dim = tempHeight.toString() + 'px'
      
      const box = this.create(dim, dim, this.ranColor())
      boxes.push(box)
      tempHeight -= decrement
    }

    return boxes
  }

  public ranColor = ():string =>{
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }





}


