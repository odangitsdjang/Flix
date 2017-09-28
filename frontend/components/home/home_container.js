import { connect } from 'react-redux';

import HomeIndex from './home_index';
import PixUtil from '../../util/pix_util';
import { getPic, receivePic, getDiscoverPix, getHomePix } from '../../actions/pix_actions';

const mapStateToProps = (state, ownProps) => ({
  loading: state.ui.loading,
  pix: PixUtil.pixObjectOrderedByCreatedDate(state.entities.pix),
  currentUserId: state.session.currentUser.id
});

const mapDispatchToProps =  (dispatch, ownProps) => {
  const properAction = /discover/.exec(ownProps.match.path) ? getDiscoverPix : getHomePix ;
  return {
    getPix: (id) => dispatch(properAction(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeIndex);
