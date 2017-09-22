import { connect } from 'react-redux';

import UserProfile from './user_profile';

import { getUserInfo } from '../../actions/user_actions';
// add pix to state

const mapStateToProps = (state, ownProps) => ({
  user: state.entities.user,
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps =  dispatch => ({
  getUserInfo: (id) => dispatch(getUserInfo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
