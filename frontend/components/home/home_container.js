import { connect } from 'react-redux';

import HomeIndex from './home_index';
import PixUtil from '../../util/pix_util';
import { getPic, receivePic, getDiscoverPix, getHomePix } from '../../actions/pix_actions';

const mapStateToProps = (state, ownProps) => ({
  pix: PixUtil.pixObjectOrderedByCreatedDate(state.entities.pix),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps =  (dispatch, ownProps) => ({
  getDiscoverPix: () => dispatch(getDiscoverPix()),
  getHomePix: (id) => dispatch(getHomePix(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeIndex);
