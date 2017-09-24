import { connect } from 'react-redux';

import UserPix from './user_pix';

import { getPic, receivePic } from '../../actions/pix_actions';

const mapStateToProps = (state, ownProps) => ({
  pix: state.entities.pix,
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps =  dispatch => ({
  getPic: (id) => dispatch(getPic(id)),
  clearPix: () => dispatch(receivePic(null))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPix);
