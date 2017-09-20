import React from 'react';

import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  renderEmail() {
    if (this.props.formType === "register")
      return (
        <label>
          Email:
          <input type="email" name="email" value={this.state.email}
            onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
          <br/>
        </label>
      );
  }

  render () {
    return (
      <div className="session">
        <div>
          <h1>Welcome to Flix</h1>
          <br/> <br/>
          <h3> Home to your highest quality pictures </h3>
        </div>

        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" name="username" value={this.state.username}
              onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
          </label>
          <br/>

          <label>
            Password:
            <input type="password" name="password" value={this.state.password}
              onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
          </label>
          <br/>

          {this.renderEmail()}


          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default SessionForm;
