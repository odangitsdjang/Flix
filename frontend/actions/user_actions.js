import UserUtil from '../util/user_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_SEARCH = "RECEIVE_SEARCH";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const START_LOADING_PIX = "START_LOADING_PIX";

const startLoadingPix = () => ({
  type: START_LOADING_PIX
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});

const receiveSearchUsers = (users) => ({
  type: RECEIVE_SEARCH,
  users
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors
});

export const getUserInfo = (username) => dispatch => {
  dispatch(startLoadingPix());
  return UserUtil.getUserInfo(username).then(
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

export const searchForUser = (letters) => dispatch => (
  UserUtil.searchForUser(letters).then(
    successUsers => dispatch(receiveSearchUsers(successUsers)),
    err => dispatch(receiveUserErrors(err.responseJSON))
  )
);
