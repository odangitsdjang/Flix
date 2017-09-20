import SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signUp = (user) => dispatch => (
  SessionUtil.createUser(user).then(
    successUser => dispatch(receiveCurrentUser(successUser)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
);

export const logIn = (user) => dispatch => (
  SessionUtil.logIn(user).then(
    successUser => dispatch(receiveCurrentUser(successUser)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  )
);
export const logOut = () => dispatch => (
  SessionUtil.logOut().then(
    (user) => dispatch(receiveCurrentUser(null))
  )
);
window.signUp = signUp;
window.logIn = logIn;
window.logOut = logOut;
