import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

import { Navbar } from 'reactstrap';
import './index.css';

class Header extends Component {

  render() {
    return (
      <Navbar className="headerNavBarContainer navbar navbar-expand-lg navbar-light">
        <div ref="headerContainer" className="contentContainer px-0">
          <NavLink to="/" className="headerLogo">
            <img src="/assets/images/bird.webp" alt="logo"/>
            <img src="/assets/images/headerLogo.svg" alt="logo"/>
          </NavLink>
        </div>
      </Navbar>
    )
  }
}

export default withRouter(Header)
