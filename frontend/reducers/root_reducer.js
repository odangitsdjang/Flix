import { combineReducers } from 'redux';

// import users from './users_reducer';
import session from './session_reducer';
// import pix from './pix_reducer';
// import ui from './ui_reducer';
import errors from './errors_reducer';
import UserReducer from './user_reducer';
import { PixReducer, PicReducer } from './pix_reducer';
import loading from './loading_reducer';


// pix: pixReducer,
// users: usersReducer
const EntitiesReducer = combineReducers({
  user: UserReducer,
  pix: PixReducer,
  pic: PicReducer
});

const UIReducer = combineReducers({
  loading
});

const RootReducer = combineReducers({
  entities: EntitiesReducer,
  session,
  errors,
  ui: UIReducer
});

export default RootReducer;
