import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import Flixx from './flixx';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Flixx />
    </HashRouter>
  </Provider>
);

export default Root;
