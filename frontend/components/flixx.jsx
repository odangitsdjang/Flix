import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RedirectToHomeIfNotLoggedInRoute, AuthRoute, ProtectedRoute } from '../util/route_util';


import NavBarContainer from './navbar/navbar_container';
import FooterContainer from './footer/footer_container';
import SessionFormContainer from './session/session_form_container';
import UserProfileContainer from './user/user_profile_container';


const Flixx = (props) => {
  return (
    <div>
      <header>
        <NavBarContainer/>
      </header>

      <Switch>
        <AuthRoute exact path="/" component={SessionFormContainer}/>
        <AuthRoute exact path="/signup" component={SessionFormContainer}/>
        <ProtectedRoute exact path='/users/:userId' component={UserProfileContainer}/>
        <Route path="/" component={ ()=> <Redirect to="/"/> } />
      </Switch>



      <Route path='/' component={FooterContainer}/>
    </div>
  );
};

// <AuthRoute path="/:something" component={<Route render={<Redirect to="/"/>}/>}/>
// <RedirectToHomeIfNotLoggedInRoute path="/:something"/>
export default Flixx;
