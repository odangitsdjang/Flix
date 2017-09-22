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
          <input placeholder="email" className="email" type="email" name="email" value={this.state.email}
            onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
      );
  }

  renderErrors() {
    return this.props.errors.map(err => <li> {err}</li>);
  }
  renderRegisterOrLogin() {
    return this.props.formType === 'login' ? "Login" : "Sign Up";
  }

  renderOpposite() {
    return this.props.formType === 'login' ? "Sign Up" : "log in";
  }

  render () {
    return (
      <div className="session-body">
        <div className="session">
          <div>
            <h1>Welcome to Flix</h1>
            <br/> <br/>
            <h3> Home to your highest quality pictures </h3>
          </div>

          <form onSubmit={this.handleSubmit}>


              <input placeholder="username" type="text" name="username" value={this.state.username}
                onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>

              <input type="password" className="password" placeholder="password" name="password" value={this.state.password}
                onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
            {this.renderEmail()}
            <br/>
            <ul>
              {this.renderErrors()}
            </ul>



            <input type="submit" value={this.renderRegisterOrLogin()}/>
            <br/>
            <h5>or <Link onClick={this.props.clearErrors} to={this.props.formType==="login" ? "/signup" : "/"}>{this.renderOpposite()}</Link> </h5>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
