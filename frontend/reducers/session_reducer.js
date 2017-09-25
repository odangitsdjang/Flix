import { combineReducers } from 'redux';
import { RECEIVE_CURRENT_USER, RECEIVE_FOLLOW, RECEIVE_UNFOLLOW } from '../actions/session_actions';
import merge from 'lodash/merge';
const notLoggedIn = {
  currentUser: null
};

const SessionReducer = (state = notLoggedIn, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser };
    case RECEIVE_FOLLOW:
      const newState =  merge({}, state);
      newState.currentUser.following.push(action.follow.following_id);
      return newState;
    case RECEIVE_UNFOLLOW:
      const newState2 =  merge({}, state);
      const indx = newState2.currentUser.following.indexOf(action.follow.following_id);
      newState2.currentUser.following.splice(indx, 1);
      return newState2;
    default:
      return state;

  }
};

export default SessionReducer;
