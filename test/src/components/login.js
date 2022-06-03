import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {app , db} from "./firebaseconfig"
import firebase from "firebase";
import { useHistory } from 'react';
export default function Login(){
    const [data, setData] = useState({});
    // const history = useHistory();
    const handleInput = (e) =>{
        let newInput = {[e.target.name]: e.target.value}
        setData({...data,...newInput} )   
    }
    const handleSubmit = (e) =>{
        console.log(data)
        let email= data.email;
        let password = data.password;
        firebase.auth().signInWithEmailAndPassword(email, password)
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
        
    }
    
    const gmailLogin = () =>{
        var provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          /** @type {firebase.auth.OAuthCredential} */
          var credential = result.credential;
      
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user)
          // ...
        }).catch((error) => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
    // const gitHubLogin = ()=>{
    //     var provider = new firebase.auth.GithubAuthProvider();
    //     provider.setCustomParameters({
    //         'allow_signup': 'false'
    //       });
    //     firebase
    //         .auth()
    //         .signInWithPopup(provider)
    //         .then((result) => {
    //             /** @type {firebase.auth.OAuthCredential} */
    //             var credential = result.credential;

    //             // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    //             var token = credential.accessToken;

    //             // The signed-in user info.
    //             var user = result.user;
    //             console.log(user)
    //             // ...
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // The email of the user's account used.
    //             var email = error.email;
    //             // The firebase.auth.AuthCredential type that was used.
    //             var credential = error.credential;
    //             // ...
    //         });
    // }
    // const phonenoLogin = () =>{
    //     firebase.auth().languageCode = 'it';
    //         // To apply the default browser preference instead of explicitly setting it.
    //         // firebase.auth().useDeviceLanguage(); 
    //         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    //             'size': 'invisible',
    //             'callback': (response) => {
    //             // reCAPTCHA solved, allow signInWithPhoneNumber.
    //             onSignInSubmit();
    //             }
    //         });


    //         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');

    //         const phoneNumber = getPhoneNumberFromUserInput();
    //         const appVerifier = window.recaptchaVerifier;
    //         firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
    //             .then((confirmationResult) => {
    //             // SMS sent. Prompt user to type the code from the message, then sign the
    //             // user in with confirmationResult.confirm(code).
    //             window.confirmationResult = confirmationResult;
    //             // ...
    //             }).catch((error) => {
    //             // Error; SMS not sent
    //             // ...
    //             });

    //         grecaptcha.reset(window.recaptchaWidgetId);

    //         // Or, if you haven't stored the widget ID:
    //         window.recaptchaVerifier.render().then(function(widgetId) {
    //         grecaptcha.reset(widgetId);
    //         });
    // }
    return(
        <form action="/home">
            <span>Email</span><input type="text" onChange={(event)=>handleInput(event)} name="email" placeholder="enter the registered email"></input><br />
            <span>Password</span><input type="text" onChange={(event)=>handleInput(event)} name="password" placeholder="enter the password"></input><br />
            or <Link to="/register">register</Link> <br/>
            <button  style={{backgroundColor:"green"}} onClick={()=>{gmailLogin()}}>Singin with google</button>
            {/* <button style={{backgroungColor:"#000",color:"white"}} onClick={()=>{gitHubLogin()}}>Singin with gitHub</button><br /> */}
            {/* <button style={{backgroungColor:"blue",color:"#000"}} onClick={()=>{gitHubLogin()}}>Singin with gitHub</button><br /> */}
            {/* <button>Singin with </button> */}
            <input type="submit" onClick={(event)=>{handleSubmit(event)}} placeholder="submit"></input> 
            <Outlet />
        </form>
    )
}

