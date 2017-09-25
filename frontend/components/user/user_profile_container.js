import { connect } from 'react-redux';

import UserProfile from './user_profile';

import { getUserInfo} from '../../actions/user_actions';
import { followUser, unfollowUser } from '../../actions/session_actions';
// add pix to state

const mapStateToProps = (state, ownProps) => ({
  loading: state.ui.loading,
  user: state.entities.user,
  currentUserId: state.session.currentUser.id,
  currentUser: state.session.currentUser
});

const mapDispatchToProps =  dispatch => ({
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  followUser: (currentUserId, userToFollowId) =>
    dispatch(followUser(currentUserId, userToFollowId)),
  unfollowUser: (currentUserId, userToFollowId) =>
    dispatch(unfollowUser(currentUserId, userToFollowId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
