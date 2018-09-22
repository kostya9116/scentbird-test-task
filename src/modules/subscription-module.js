export const SUBSCRIBE_USER = "SUBSCRIBE_USER";
export const SUBSCRIBE_USER_SUCCESS = "SUBSCRIBE_USER_SUCCESS";
export const SUBSCRIBE_USER_FAILURE = "SUBSCRIBE_USER_FAILURE";

const initialState = {
  data: null,
  pending: false,
  error: false,
  message: ''
}

const subscribeUser = (data) => {
  return dispatch => {
    dispatch({ type: SUBSCRIBE_USER })
    //There should be api request, now it will always catch the error, because there is no such api url
    /**
     * There should be api request which should dispatch the action depends on the response
     *
     * Something like that:
     *
     *  axios.get('/api/sign-up', data).then(response => {
          dispatch({ type: SIGN_UP_USER_SUCCESS, payload: response.data })
        }).catch(error => {
          dispatch({ type: SIGN_UP_USER_FAILURE, payload: {message: 'Something went wrong, please try again.'} })
        })
     */
    let success = true;

    success ? dispatch({ type: SUBSCRIBE_USER_SUCCESS, payload: { message: 'Subscribed!' } }) : dispatch({ type: SUBSCRIBE_USER_FAILURE, payload: { message: 'Something went wrong, please try again.' } })
  }
}

export const actions = {
  subscribeUser
};

const subscriptionReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case SUBSCRIBE_USER:
      return {
        ...state,
        data: null,
        pending: true,
        error: null,
        message: ''
      }

    case SUBSCRIBE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        pending: false,
        message: 'Subscription completed successfully.',
        error: false,
      }

    case SUBSCRIBE_USER_FAILURE:
      return {
        ...state,
        data: null,
        error: true,
        message: action.payload.message,
        pending: false,
      }

    default:
      return state
  }
}

export default subscriptionReducer;

