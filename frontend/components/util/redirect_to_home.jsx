import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const RedirectToHome = (props) => (
  <Route render={<Redirect to="/"/>}/>
);

export default RedirectToHome;
