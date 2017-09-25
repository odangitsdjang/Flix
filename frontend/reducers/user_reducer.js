import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_FOLLOW, RECEIVE_UNFOLLOW  } from '../actions/session_actions';
import merge from 'lodash/merge';

const defaultUser = null;

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return action.user;
    case RECEIVE_CURRENT_USER:
      // this handles logging out: clear the user store
      return action.currentUser === null ? null : state ;
    case RECEIVE_FOLLOW:
      const newState =  merge({}, state);
      newState.followers.push(action.follow.follower_id);
      return newState;
    case RECEIVE_UNFOLLOW:
      const newState2 =  merge({}, state);
      const indx = newState2.followers.indexOf(action.follow.follower_id);
      newState2.followers.splice(indx, 1);
      return newState2;
    default:
      return state;

  }
};

export default UserReducer;
