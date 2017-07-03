import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';
import mentors from './data'

const DATA = mentors;

class App extends Component {
  render() {
    return (
      <div>
        <Main data={DATA.mentors} />
      </div>
    );
  }
}

export default App;
