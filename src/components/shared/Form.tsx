import * as React from 'react';
import FormProps from '../../models/IProps.model';
import {useState} from 'react'


export default function Form({onSubmit}:FormProps) {
  const [username, setUsername] = useState('');



return <form onSubmit={event=>{
  event.preventDefault()
  onSubmit(username)

  }}>


</form>
  
}