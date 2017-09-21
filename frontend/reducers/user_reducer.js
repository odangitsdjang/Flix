import { RECEIVE_USER } from '../actions/user_actions';

const defaultUser = null;

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    default:
      // check if this works
      return defaultUser;

  }
};

export default UserReducer;
