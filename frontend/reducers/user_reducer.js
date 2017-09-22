import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const defaultUser = null;

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_CURRENT_USER:
      // this handles logging out: clear the user store
      return action.currentUser === null ? null : state ;
    default:
      return state;

  }
};

export default UserReducer;
