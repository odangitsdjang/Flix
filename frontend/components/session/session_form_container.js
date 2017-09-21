import { connect } from 'react-redux';

import { clearSessionErrors, logIn, logOut, signUp } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  formType: ownProps.match.path === "/" ? "login" : "register"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.path === "/" ? "login" : "register";
  const processForm = (formType === 'login') ? logIn : signUp;
  return {
    clearErrors: () => dispatch(clearSessionErrors()),
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
