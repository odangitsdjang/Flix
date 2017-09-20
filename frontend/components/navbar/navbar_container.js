import { connect } from 'react-redux';
import NavBar from './navbar';
import { logOut } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
