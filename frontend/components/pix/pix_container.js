import { connect } from 'react-redux';

import Pix from './pix';

import { getPic } from '../../actions/pix_actions';

const mapStateToProps = (state, ownProps) => ({
  // user: state.entities.user,
  // currentUserId: state.session.currentUser.id
});

const mapDispatchToProps =  dispatch => ({
  getPic: (id) => dispatch(getPic(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pix);
