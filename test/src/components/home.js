import React, { useState } from "react";

import firebase from "firebase";

import {app ,db} from "./firebaseconfig"

export default function Home(){
    const [user , setUser] = useState({})

    /*************** getter for every doc ******************/
    // db.collection("login-test").get().then((querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(`${doc.id} => ${{...doc.data()}}`);
    //         console.log(doc.data())
    //         if(doc.data().email=="joejoestar@gmail.com"){
    //             setUser({...user,...doc.data()})
    //         }
    //     });
    // });

    /************ *********************/
    db.collection("login-test").doc("user3").get().then((data)=>console.log(data.data().userName))
    db.collection("login-test").doc('bVr7uP21Qx3TYEhFCFAX').delete().then(
        db.collection("login-test").get().then((snap)=>{
            snap.forEach((doc)=>{
                console.log(`${doc.id} => ${doc.data()}`)
            })
        })
    )
    db.collection("login-test").doc("user3").update({userName:"Imsoryjon2"}).then((userName)=>{console.log(userName)})
    db.collection("login-test").doc("user3").update({gender:"lchorrorsxfc"}).then((gender)=>{console.log(gender)})

    return(<>
    <h1>{user.email}</h1>
    <h1></h1>
        {/* <ul {...user}>
            <li><h1>{user.userName}</h1></li>
            <li><h1>{user.email}</h1></li>
            <li><h1>{user.gender}</h1></li>
            <li><h1>{user.createdAt}</h1></li>
        </ul> */}
        </>)
}