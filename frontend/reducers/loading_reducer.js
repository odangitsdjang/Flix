import { START_LOADING_PIX, RECEIVE_USER } from '../actions/user_actions';

const defaultState = false;

const LoadingReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_PIX:
      return true;
    case RECEIVE_USER:
      return defaultState;
    default:
      return state;
  }
};

export default LoadingReducer;
