import React, { Component } from 'react';
import Home from './components/home/Home';
import Headers from './components/nav/Headers';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Headers />
        <div className="container center main-container">
          <Home />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
