import { connect } from 'react-redux';

import UserPix from './user_pix';

import { getPic, receivePic } from '../../actions/pix_actions';

// ownProps.x refers to the arguments being passed down from discover
const mapStateToProps = (state, ownProps) => ({
  path: ownProps.path || ownProps.match.path,
  pic: state.entities.pic|| ownProps.pic,
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
