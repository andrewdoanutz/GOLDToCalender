import React, { Component } from 'react'
import "../css/googlesignin.css";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

firebase.initializeApp({
  apiKey: "AIzaSyBROZZvSTM4XbVEuppNsSmzmAeHxxrX7GE",
  authDomain: "goldtocalendar-1547328134993.firebaseapp.com"
})

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    this.state.isSignedIn = true;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
export default class Signin extends Component {
  state = {isSignedIn : false}
  
  render() {
    return (
      <div class = "GoogleSignIn">
        {this.state.isSignedIn ? (
            <div>
              <h1>Sign Out</h1>
              <button
                    class = "btn signOut"
                    label="Google Sign Out"
                    onClick={this.signout}>
                Sign Out
                </button>
            </div>
        ) : (
          <div>
              <h1>Sign In</h1>
              <div>
                <button
                    class = "btn signIn"
                    label="Google Sign In"
                    onClick={this.signInWithRedirect}>
                Sign In With Google
                </button>
              </div>
          </div>
        )}
      </div>
    )
  }

  signInWithRedirect = ()=>{
    firebase.auth().signInWithRedirect(provider);
  }
  
  signout = ()=>{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      this.state.isSignedIn = false;
    }).catch(function(error) {
      // An error happened.
    });
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    });
  }
}
