import React, { useState } from "react";
import { NavLink } from "react-router-dom"

import logo from '../assets/logo.svg';

//import LoginBadge from './LoginBadge';

export default function Nav() {

  const [isActive, setIsActive] = useState(false);

  return (
  <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src={logo} className="App-logo" height="28" />
      <h3 className="title">Be Happy</h3>
    </a>

    <a role="button" className={"navbar-burger" + ( isActive && ' is-active')} aria-label="menu" aria-expanded="false" onClick={()=> setIsActive(!isActive) } >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div className="navbar-menu" className="{'is-active': isActive }">
    <div className="navbar-start">
      <NavLink className={({isActive}) => "navbar-item is-tab" + ( isActive && " is-active")} to="/" exact>
        Home
      </NavLink>

      <NavLink className="navbar-item is-tab" to="/feed" active-className="is-active">
        Feed
      </NavLink>

      <NavLink className="navbar-item is-tab" to="/about" active-className="is-active">
        Documentation
      </NavLink>

      <div className="navbar-item has-dropdown is-hoverable" >
        <a className="navbar-link" >
          More
        </a>

        <div className="navbar-dropdown">
          <NavLink className="navbar-item is-tab" to="about" active-className="is-active">
            About
          </NavLink>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider" />
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <login-badge />
      </div>
    </div>
  </div>
</nav>

)}