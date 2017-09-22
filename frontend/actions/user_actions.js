import UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const START_LOADING_PIX = "START_LOADING_PIX";


const startLoadingPix = () => ({
  type: START_LOADING_PIX
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUserInfo = (id) => dispatch => {
  dispatch(startLoadingPix);
  return UserUtil.getUserInfo(id).then(
    successUser => dispatch(receiveUser(successUser)),
    err => dispatch(receiveUserErrors(err.responseJSON))
  );
};

export const updateUser = (id, property) => dispatch => (
  UserUtil.updateUser(id, property).then(
    successUser => dispatch(receiveUser(successUser)),
    err => dispatch(receiveUserErrors(err.responseJSON))
  )
);

window.getUserInfo = getUserInfo;
window.updateUser = updateUser;
