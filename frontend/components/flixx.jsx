import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './navbar/navbar_container';
import FooterContainer from './footer/footer_container';
import SessionFormContainer from './session/session_form_container';

const Flixx = (props) => {
  return (
    <div>
      <header>
        <NavBarContainer/>
      </header>

      <div className="react-body">
        <Switch>
          <AuthRoute exact path="/" component={SessionFormContainer}/>
          <AuthRoute path="/signup" component={SessionFormContainer}/>
        </Switch>

      </div>

      <Route path='/' component={FooterContainer}/>
    </div>
  );
};

export default Flixx;
