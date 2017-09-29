import {
  RECEIVE_SEARCH, RECEIVE_USER
} from '../actions/user_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCH:
      return action.users;
    case RECEIVE_USER:
      return null;
    default:
      return state;
  }
};
