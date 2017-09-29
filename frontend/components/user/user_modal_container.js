import { connect } from 'react-redux';

import UserModal from './user_modal';

import { createPic } from '../../actions/pix_actions';
import { getUserInfo, updateUser } from '../../actions/user_actions';
// add pix to state

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  authorId: state.session.currentUser.id
});

const mapDispatchToProps =  dispatch => ({
  getUserInfo: (username) => dispatch(getUserInfo(username)),
  createPic: (pic) => dispatch(createPic(pic)),
  updateProfile: (id, property) => dispatch(updateUser(id, property))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);
