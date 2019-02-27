//3rd Party Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//Custom Components
import Home from './components/home/Home';
import Headers from './components/nav/Headers';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Headers />
          <div className="container center main-container">
            <Route exact path="/" component={Home} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
