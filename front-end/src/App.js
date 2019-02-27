//3rd Party Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//Custom Components
import Home from './components/home/Home';
import Headers from './components/nav/Headers';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Headers />
          <div className="container center main-container">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
