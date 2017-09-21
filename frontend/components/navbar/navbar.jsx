import React from 'react';
import { Link } from 'react-router-dom';

// const sessionLinks = () => (
//   <nav>
//     <Link to="/">Login</Link>
//     &nbsp;or&nbsp;
//     <Link to="/signup">Sign up!</Link>
//   </nav>
// );

const logOutNav = (logout) => (
  <li>
    <button className="logout" onClick={( (e)=> {
        e.preventDefault();
        logout();
      })}> Log Out</button>
  </li>
);

const profileNav = (currentUser) => (
  <li>
    <Link to={`/users/${currentUser.id}`}>Profile</Link>
  </li>
);

const greetingWithName = (currentUser, logout) => (
	<hgroup>
    <h2>Hi, {currentUser.username}!</h2>
    <input className="logout" onClick={logout} value="Log Out"/>
	</hgroup>
);

const NavBar = ({ currentUser, logout }) => (

  <nav className="headerNav">
    <div>
      <ul className="header">
        <Link to="/" className="logo">Flix</Link>
        <li> Discover </li>
        <li id="searchLi">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
        </li>
        { currentUser ? profileNav(currentUser) : "" }
        { currentUser ? logOutNav(logout) : "" }


      </ul>
    </div>
  </nav>
);
// currentUser ? greetingWithName(currentUser, logout) : sessionLinks()
// TODO change discover to <Link to="/discover">Discover</Link>
export default NavBar;
