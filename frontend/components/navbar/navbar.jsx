import React from 'react';
import { Link } from 'react-router-dom';
import SearchContainer from './search_container';
import SearchResults from './search_results';

const logOutNav = (logout) => (
  <li>
    <button className="logout" onClick={( (e)=> {
        e.preventDefault();
        logout();
      })}> Log Out</button>
  </li>
);
// <Link to={`/users/${currentUser.id}`}>Profile</Link>
const profileNav = (currentUser) => (
  <li>
    <Link to={`/users/${currentUser.username}`}>Profile</Link>
  </li>
);

const greetingWithName = (currentUser, logout) => (
	<hgroup>
    <h2>Hi, {currentUser.username}!</h2>
    <input className="logout" onClick={logout} value="Log Out"/>
	</hgroup>
);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchRes: ""};
    this.setSearchRes = this.setSearchRes.bind(this);
  }
  setSearchRes(values) {
    this.setState({searchRes: values});
  }
  render() {
    const { currentUser, logout } = this.props;
    return (
      <div>
        <nav className="headerNav">
          <div>
            <ul className="header">
              <li><a className="logo" href="#/">Flix</a></li>
              <li id="search-li">
                <SearchContainer setSearchRes={this.setSearchRes} />
              </li>
              <li id="discover"> <a href="#/discover">Discover</a> </li>
              { currentUser ? profileNav(currentUser) : "" }
              { currentUser ? logOutNav(logout) : "" }
            </ul>
          </div>
        </nav>
        <div>
          <SearchResults searchRes={this.state.searchRes}/>
        </div>
      </div>

    );
  }
}

export default NavBar;
