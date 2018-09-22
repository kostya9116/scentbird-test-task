import { connect } from 'react-redux';

import SubscriptionComponent from '../components/SubscriptionComponent';
import { actions } from '../modules/subscription-module';
import { bindActionCreators } from "redux";

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state, props) => ({
  user: state.auth.data
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubscriptionComponent);

