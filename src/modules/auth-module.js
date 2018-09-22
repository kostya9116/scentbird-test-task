export const SIGN_UP_USER = "SIGN_UP_USER";
export const SIGN_UP_USER_SUCCESS = "SIGN_UP_USER_SUCCESS";
export const SIGN_UP_USER_FAILURE = "SIGN_UP_USER_FAILURE";

const initialState = {
  data: null,
  pending: false,
  error: false,
  message: ''
}

const signUpUser = (data) => {
  return dispatch => {
    dispatch({ type: SIGN_UP_USER })
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

    success ? dispatch({ type: SIGN_UP_USER_SUCCESS, payload: { name: 'test' } }) : dispatch({ type: SIGN_UP_USER_FAILURE, payload: { message: 'Something went wrong, please try again.' } })
  }
}

export const actions = {
  signUpUser
};

const authReducer = (state = initialState, action) => {
  switch ( action.type ) {
    case SIGN_UP_USER:
      return {
        ...state,
        data: null,
        pending: true,
        error: null,
        message: ''
      }

    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        pending: false,
        message: 'Registration completed successfully.',
        error: false,
      }

    case SIGN_UP_USER_FAILURE:
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

export default authReducer

