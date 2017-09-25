import SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SEESION_ERRORS";
export const CLEAR_PIX = "CLEAR_PIX";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const RECEIVE_UNFOLLOW = "RECEIVE_UNFOLLOW";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const clearAction = (type) => ({
  type
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveFollow = (follow) => ({
  type: RECEIVE_FOLLOW,
  follow
});

const receiveUnfollow = (follow) => ({
  type: RECEIVE_UNFOLLOW,
  follow
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
    (user) => {
      dispatch(receiveCurrentUser(null));
      dispatch(clearAction(CLEAR_PIX));
    }
  )
);

export const followUser = (currentUserId, userToFollowId) => dispatch => (
  SessionUtil.followUser(currentUserId, userToFollowId).then (
    successFollow => dispatch(receiveFollow(successFollow))
  )
);

export const unfollowUser = (currentUserId, userToFollowId) => dispatch => (
  SessionUtil.unfollowUser(currentUserId, userToFollowId).then (
    successFollow => dispatch(receiveUnfollow(successFollow))
  )
);


window.signUp = signUp;
window.logIn = logIn;
window.logOut = logOut;
