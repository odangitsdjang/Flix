import { connect } from 'react-redux';

import UserPix from './user_pix';

import { getPic } from '../../actions/pix_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps =  dispatch => ({
  // getPic: (id) => dispatch(getPic(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPix);
