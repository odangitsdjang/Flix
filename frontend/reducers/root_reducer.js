import { combineReducers } from 'redux';

// import users from './users_reducer';
import session from './session_reducer';
// import pix from './pix_reducer';
// import ui from './ui_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session,
  errors
});

export default RootReducer;
