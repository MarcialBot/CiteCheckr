import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state= {

    }
  }
  render() {
    return (
    <div className="App-outer-container">
        <Navbar />
        <div className="App-inner-container">
          
        </div>
    </div>
  );
    }
}

export default App;
