import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import firebase from 'firebase/app';



// ............................Initializing firebase applicaton with configuraton...........

// firebase.initializeApp({
//   apiKey: "AIzaSyA9HESuIYq1ywHZ60iVXyRHYlQPJ6MBXBE",
//     authDomain: "hostel-allocation-assign-a8dca.firebaseapp.com",
//     projectId: "hostel-allocation-assign-a8dca",
//     storageBucket: "hostel-allocation-assign-a8dca.appspot.com",
//     messagingSenderId: "602418684442",
//     appId: "1:602418684442:web:6d2dc1eea1dcad3bec67a3",
//     measurementId: "G-8LELTQ20B7"
// });
//........................................................................................





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
