import React, { Component } from 'react';
import Home from './components/home/Home';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container center main-container">
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
