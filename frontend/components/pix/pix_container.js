import { connect } from 'react-redux';

import UserPix from './user_pix';

import { getPic, receivePic } from '../../actions/pix_actions';

const mapStateToProps = (state, ownProps) => ({
  pic: state.entities.pic,
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
