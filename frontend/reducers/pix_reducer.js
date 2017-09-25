import { RECEIVE_PIC, RECEIVE_PIX, RECEIVE_PIX_ERRORS } from '../actions/pix_actions';
import { CLEAR_PIX } from '../actions/session_actions';
import { combineReducers } from 'redux';

const defaultPic = null;

export const PicReducer = (state = defaultPic, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIC:
      return action.pic;
    default:
      return defaultPic;
  }
};

// Note we are using this for Discover/Home, but not for user show
// We are using pix under entites/user when showing user's pictures
export const PixReducer = (state = defaultPic, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIX:
      return action.pix;
    case CLEAR_PIX:
      return null;
    default:
      return state;
  }
};
