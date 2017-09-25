import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Home = ({component1: Component1, component2: Component2,  path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component1 {...props} />
    ) : (
      <Component2 {...props} />
    )
  )}/>
);

const mapStateToProps = state => {
  return {loggedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const HomeRoute = withRouter(connect(mapStateToProps, null)(Home));
export const ProtectedRoute = withRouter(
  connect(mapStateToProps, null)(Protected));
