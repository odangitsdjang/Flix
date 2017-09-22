import { RECEIVE_PIC, RECEIVE_PIX, RECEIVE_PIX_ERRORS } from '../actions/pix_actions';

const defaultPic = null;

const PixReducer = (state = defaultPic, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PIC:
      return action.pic;
    case RECEIVE_PIX:
      return action.pix;
    default:
      // check if this works
      return defaultPic;
  }
};

export default PixReducer;
