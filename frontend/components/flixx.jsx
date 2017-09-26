import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomeRoute, AuthRoute, ProtectedRoute } from '../util/route_util';


import NavBarContainer from './navbar/navbar_container';
import FooterContainer from './footer/footer_container';
import SessionFormContainer from './session/session_form_container';
import UserProfileContainer from './user/user_profile_container';
import PixContainer from './pix/pix_container';
import HomeContainer from './home/home_container';


const Flixx = (props) => {
  return (
    <div>
      <header>
        <NavBarContainer/>
      </header>

      <Switch>
        <HomeRoute exact path="/" component1={HomeContainer} component2={SessionFormContainer}/>
        <AuthRoute exact path="/signup" component={SessionFormContainer}/>
        <ProtectedRoute exact path="/discover" component={HomeContainer}/>
        <ProtectedRoute path='/users/:userId' component={UserProfileContainer}/>
        <ProtectedRoute exact path='/pix/:picId' component={PixContainer}/>

      </Switch>

      <ProtectedRoute exact path='/users/:userId/pix/:picId' component={PixContainer}/>



      <Route path='/' component={FooterContainer}/>
    </div>
  );
};

// <AuthRoute path="/:something" component={<Route render={<Redirect to="/"/>}/>}/>
// <RedirectToHomeIfNotLoggedInRoute path="/:something"/>
export default Flixx;
