import UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUserInfo = (id) => dispatch => (
  UserUtil.getUserInfo(id).then(
    successUser => dispatch(receiveUser(successUser)),
    err => dispatch(receiveUserErrors(err.responseJSON))
  )
);

window.getUserInfo = getUserInfo;
