import React, { Component } from 'react';

class Footer extends Component{
    render(){
      const curTime = new Date();
      const curYear = curTime.getFullYear();

      return(
          <footer className="page-footer black">
            <div className="container">
              <div className="row">
                <div className="col l6 s12">
                  <h5 className="white-text">Store Location</h5>
                  <div className="grey-text text-lighten-4">699 Meadow Lane</div>
                  <div className="grey-text text-lighten-4">Oakland, CA 94612</div>
                  <div className="grey-text text-lighten-4">707.366.8890</div>
                  <div className="grey-text text-lighten-4">info@zapgames.com</div>
                </div>
                <div className="col l4 offset-l2 s12">
                  <h5 className="white-text">Company</h5>
                  <ul>
                    <li><a className="grey-text text-lighten-3" href="#">About Us</a></li>
                    <li><a className="grey-text text-lighten-3" href="#">Blog</a></li>
                    <li><a className="grey-text text-lighten-3" href="#">Partners</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright">
              <div className="container center">
              Website Design/Setup © {curYear} Michael Rubino
              </div>
            </div>
          </footer>
      )
    }
}

export default Footer;