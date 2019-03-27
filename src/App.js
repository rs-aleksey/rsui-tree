import React, { Component } from 'react';
import './App.css';
// import SampleTree from './tree/SampleTree';
import PathBuilder from './components/PathBuilder';

class App extends Component {
  render() {
    return <PathBuilder pathId={'p_id_1'}/>;
  }
}

export default App;
