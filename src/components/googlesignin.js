import React, { Component } from 'react'
import "../css/googlesignin.css";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyBROZZvSTM4XbVEuppNsSmzmAeHxxrX7GE",
  authDomain: "goldtocalendar-1547328134993.firebaseapp.com"
})

export default class Signin extends Component {
  state = {isSignedIn : false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = ()=>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
  }

  render() {
    return (
      <div class = "GoogleSignIn">
        {this.state.isSignedIn ? (
          <div>Signed In</div>) : (
          <StyledFirebaseAuth
            class = "FireBaseAuth"
            uiconfig={this.uiConfig}
            firebaseAut={firebase.auth()}/>
        )}
      </div>
      
    )
  }
}
