import { connect } from 'react-redux';

import Search from './search';
import {searchForUser} from '../../actions/user_actions';

const mapStateToProps = (state) => ({
  searchRes: state.search
});

const mapDispatchToProps = dispatch => ({
  searchForUser: (letters) => dispatch(searchForUser(letters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
