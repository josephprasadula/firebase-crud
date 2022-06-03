import React,{useState} from 'react'
import {app} from "./firebaseconfig"

import firebase from "firebase/app";
// import "firebase/auth";


export default function Banner() {
  const [data, setdata] = useState({})
  const handleInput = (event) =>{
    let newInput ={[event.target.name] : event.target.value};

    setdata({...data, ...newInput})
  }
  const handleSubmit = ()=>{
    console.log(data)
    let email = data.email
    let password = data.password
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage,errorCode)
    });
  }
  return (
    <div>
        <input type="text" name='email' placeholder='enter your email' onChange={(event) =>{handleInput(event)}}/><br/>
        <input type="text" name='password' placeholder='enter your password' onChange={(event) =>{handleInput(event)}}/><br/>
        <input type="submit" onClick={(event)=>{handleSubmit(event)}}/>
    </div>
  )
}
