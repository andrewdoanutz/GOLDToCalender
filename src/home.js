import React, { Component } from 'react'
import './css/home.css';
import Proc from "./components/imageprocessor"
import ImageUploader from 'react-images-upload';


import "./css/googlesignin.css";
import firebase from "firebase"


firebase.initializeApp({
  apiKey: "AIzaSyBROZZvSTM4XbVEuppNsSmzmAeHxxrX7GE",
  authDomain: "goldtocalendar-1547328134993.firebaseapp.com"
})

var provider = new firebase.auth.GoogleAuthProvider();
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    this.state.setState({isSignedIn: true});
   
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

export default class Home extends Component {
  constructor(props) {
    super(props);
     this.state = { pictures: [],
      imageuploaded:false,
      isSignedIn : false, };
     this.onDrop = this.onDrop.bind(this);
}

onDrop(picture) {
    this.setState({
        pictures: this.state.pictures.concat(picture),
        
      imageuploaded:true
    }
    );
    console.log("uploaded")
}


    
  signInWithRedirect = ()=>{
    
    firebase.auth().signInWithRedirect(provider).then(
     
    firebase.auth().getRedirectResult().then(
      function(authData) {
      console.log(authData);
      console.log("done");
    })
    );
  }
  
  signout = ()=>{
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      this.setState({
        isSignedIn:false
      })
    }).catch(function(error) {
      // An error happened.
    });
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:user})
    });
  }


        render() {
          if(this.state.isSignedIn && this.state.imageuploaded ){
          return(
            
          <div className = "homebox">
          <Proc image={this.state.pictures[0]}/>
            <div>
              <h1>Sign Out</h1>
              <button
                    className = "btn signOut"
                    label="Google Sign Out"
                    onClick={this.signout}>
                Sign Out
                </button>
            </div>
            
            </div>
        )} 
        else if(this.state.isSignedIn && !this.state.imageuploaded ){
          return(
            <div className="homebox">
            
          <strong className="homehead">Upload an Image to get started</strong>
            <div className="row">
              <div className="col-md-6 col-md-offset-3" className="uploader">
                <ImageUploader
                      withIcon={true}
                      buttonText='Choose image'
                      onChange={this.onDrop}
                      imgExtension={['.jpg', '.gif', '.png', '.gif']}
                      maxFileSize={5242880}
                />
              </div>
            </div>
            <div>
              <a href="https://photos.app.goo.gl/5xQr8x333gPYCXXPA">Don't go to UCSB? Here's a sample photo!</a>
            </div>
            <div className = "GoogleSignIn">
              <div>
                <h1>Sign Out</h1>
                <button
                      className = "btn signOut"
                      label="Google Sign Out"
                      onClick={this.signout}>
                  Sign Out
                  </button>
              </div>
              </div>
            
          </div>
             
          )
        }
        else{ 
          return(
          <div className="homebox">
              <h1>Sign In</h1>
              <div>
                <button
                    className = "btn signIn"
                    label="Google Sign In"
                    onClick={this.signInWithRedirect}>
                Sign In With Google
                </button>
              </div>
          </div>
        )}
        
      
        }
}
