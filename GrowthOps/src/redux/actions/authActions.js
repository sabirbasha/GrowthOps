import ApiManager from '../../manager/ApiManager';

export function isLoading(bool: Boolean) {
  return {
    type: 'LOGIN_ATTEMPT',
    isLoading: bool,
  };
}

export function loginSuccess(userData: Object) {
  return {
    type: 'LOGIN_SUCCESS',
    userData,
  };
}

export function loginFailed(error: Object) {
  return {
    type: 'LOGIN_FAILED',
    error,
  };
}

export function login(data) {
  return dispatch => {
    dispatch(isLoading(true));

    const url = ' https://avocado.od-tech.my/stubs/gateway/login/token';
    const params = JSON.stringify(data);
    // call api CONTENT_TYPE_APP_JSON
    return ApiManager(url, params)
      .then(response => {
        if (response.status < 300) {
          dispatch(isLoading(false));
          dispatch(loginSuccess(response.data));
        } else {
          dispatch(isLoading(false));
          dispatch(loginSuccess(response.data));
        }
      })
      .catch(error => {
        console.log('error', error);
        dispatch(isLoading(false));
        dispatch(loginFailed(error));

      });
  };
}
