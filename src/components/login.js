// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';

// Configure Firebase.
const config = {
    apiKey: "AIzaSyA9HESuIYq1ywHZ60iVXyRHYlQPJ6MBXBE",
    authDomain: "hostel-allocation-assign-a8dca.firebaseapp.com",
    projectId: "hostel-allocation-assign-a8dca",
    storageBucket: "hostel-allocation-assign-a8dca.appspot.com",
    messagingSenderId: "602418684442",
    appId: "1:602418684442:web:6d2dc1eea1dcad3bec67a3",
    measurementId: "G-8LELTQ20B7"
};
firebase.initializeApp(config);

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/signedIn',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function SignInScreen() {
  return (
    <div>
      <h1>Hostel Allocation </h1>
      <p>Please sign-in:</p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignInScreen