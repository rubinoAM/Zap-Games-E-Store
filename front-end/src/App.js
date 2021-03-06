//3rd Party Modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

//Custom Components
import Home from './components/home/Home';
import Headers from './components/nav/Headers';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Game from './components/pages/Game';
import Cart from './components/pages/Cart';

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
            <Route exact path="/games/:id" component={Game} />
            <Route exact path="/cart" component={Cart} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
