import { combineReducers } from 'redux';

// import users from './users_reducer';
import session from './session_reducer';
// import pix from './pix_reducer';
// import ui from './ui_reducer';
import errors from './errors_reducer';
import UserReducer from './user_reducer';
import PixReducer from './pix_reducer';


// pix: pixReducer,
// users: usersReducer
const EntitiesReducer = combineReducers({
  user: UserReducer,
  pix: PixReducer
});

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session,
  errors
});

export default RootReducer;
