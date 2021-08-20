import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import React, { Component } from 'react';
import SignInScreen from './components/login'
import AlreadyLogin from './components/AlreadyLogin';


class App extends Component {

  render(){
  return (
    <div className="App">
      <SignInScreen/>
      <AlreadyLogin/>
    </div>
  );
}
}
export default App;
