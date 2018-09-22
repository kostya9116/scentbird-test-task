import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import authReducer from '../modules/auth-module';
import subscriptionReducer from '../modules/subscription-module';

export default combineReducers({
  router: routerReducer,
  auth: authReducer,
  subscription: subscriptionReducer,
})
