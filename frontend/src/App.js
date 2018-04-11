import React, { Component } from 'react';
import logo from './logo.svg';
import Auth from 'auth0-js';
import './App.css';
import Announcements from './components/announcements/announcements.js';


class App extends Component {

  render() {
    return (
      <div className="App">
      <Announcements />
      </div>
    );
  }
}

export default App;
