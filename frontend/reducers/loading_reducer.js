import { START_LOADING_PIX, RECEIVE_USER } from '../actions/pix_actions';

const defaultState = { loading: false };

const PixReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case START_LOADING_PIX:
      return { loading: true};
    case RECEIVE_USER:
      return defaultState;
    default:
      // check if this works
      return state;
  }
};

export default PixReducer;
