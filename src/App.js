import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';

const DATA = [
  {
    name: 'Camila',
    image: '',
    area: 'front-end',
    technologies: 'html',
    level: 'iniciante',
  },
  {
    name: 'Ana',
    image: '',
    area: 'back-end',
    technologies: 'python',
    level: 'iniciante',
  },
  {
    name: 'Maria',
    image: '',
    area: 'back-end',
    technologies: 'python',
    level: 'iniciante',
  },
];

class App extends Component {
  render() {
    return (
      <div>
        <Main data={DATA} />
      </div>
    );
  }
}

export default App;
