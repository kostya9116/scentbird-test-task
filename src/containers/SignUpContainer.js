import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignUp from '../components/auth/signUp';
import { actions } from '../modules/auth-module';

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state, props) => ({
  user: state.user
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);

