import { connect } from 'react-redux';

import UploadModal from './uploadmodal';

import { createPic } from '../../actions/pix_actions';
// add pix to state

const mapStateToProps = (state, ownProps) => ({
  authorId: state.session.currentUser.id
});

const mapDispatchToProps =  dispatch => ({
  createPic: (pic) => dispatch(createPic(pic))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadModal);
