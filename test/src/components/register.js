import React from "react";
import { useState } from "react";
import { app, db } from "./firebaseconfig";
import firebase from "firebase/app";

export default function Register(){
    const [data, setData] = useState({});
    const handleInput = (e) =>{
        let newInput = {[e.target.name]: e.target.value}
        setData({...data,...newInput} )   
        console.log(data)
    }
    const handleSubmit = (e) =>{
        let time={ createdAt : new Date()}
        setData({...data,...time})
        console.log(data)
        let email= data.email;
        let password = data.password;
        // let userName = data.userName;
        // let gender = data.gender;
        firebase.auth().craeteUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                // ...
                console.log(user)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(error)
            });
        db.collection("login-test").add({
            ...data
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    
    return(
        <React.Fragment>
        <span>FullName</span><input name="userName" placeholder="please enter your name" onKeyDown={(e)=>{handleInput(e)}} type="text"></input><br></br>
        <span>emailID</span><input name="email" placeholder="please enter valid email" onChange={(e)=>{handleInput(e)}} type="text"></input><br></br>
        <span>password</span><input name="password" placeholder="please enter password" onChange={(e)=>{handleInput(e)}} type="text"></input><br></br>
        <span>Gender:</span><input name="gender" value="female" placeholder="" onClick={(e)=>{handleInput(e)}} type="radio"></input><span>Male</span><input name="gender" value="male" placeholder="" onClick={(e)=>{handleInput(e)}} type="radio"  /> <span> Female</span><br></br>
        <span></span><input onClick={(e)=>{handleSubmit(e)}} type="submit"></input><br></br>
        </React.Fragment>
    )
}