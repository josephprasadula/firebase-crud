import React from "react";
import firebase from "firebase";
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

export default function Firebaseui(){
    // Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
    return(
        <div>

        </div>
    )
}