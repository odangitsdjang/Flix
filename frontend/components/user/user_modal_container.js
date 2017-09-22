import { connect } from 'react-redux';

import UserModal from './user_modal';

import { createPic } from '../../actions/pix_actions';
import { getUserInfo } from '../../actions/user_actions';
// add pix to state

const mapStateToProps = (state, ownProps) => ({
  authorId: state.session.currentUser.id
});

const mapDispatchToProps =  dispatch => ({
  getUserInfo: (id) => dispatch(getUserInfo(id)),
  createPic: (pic) => dispatch(createPic(pic))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserModal);
