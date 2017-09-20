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
          <input placeholder="email" type="email" name="email" value={this.state.email}
            onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
      );
  }
  renderRegisterOrLogin() {
    return this.props.formType === 'login' ? "log in" : "register";
  }

  renderOpposite() {
    return this.props.formType === 'login' ? "register" : "log in";
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
            <h2> {this.renderRegisterOrLogin()}! </h2>

              <input placeholder="username" type="text" name="username" value={this.state.username}
                onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
            <br/>

              <input type="password" placeholder="password" name="password" value={this.state.password}
                onChange={(e)=>this.setState({[e.target.name]: e.target.value}) }/>
            <br/>

            {this.renderEmail()}
            <br/>


            <input type="submit" value={this.props.formType}/>
            <br/>
            <h5>or <Link to={this.props.formType==="login" ? "/signup" : "/"}>{this.renderOpposite()}</Link> </h5>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;
