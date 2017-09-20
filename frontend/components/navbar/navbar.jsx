import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <Link to="/">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const greetingWithName = (currentUser, logout) => (
	<hgroup>
    <h2>Hi, {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
	</hgroup>
);

const NavBar = ({ currentUser, logout }) => (
  // currentUser ? greetingWithName(currentUser, logout) : sessionLinks()
  <nav className="headerNav">
    <ul className="header">
      <li className="logo"> Flix </li>
      <li> Discover </li>
      <li id="searchLi">
        <span className="icon"><i className="fa fa-search"></i></span>
        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
      </li>
      <li> Profile </li>
      <li> Sign Out </li>
    </ul>
  </nav>
);

export default NavBar;
