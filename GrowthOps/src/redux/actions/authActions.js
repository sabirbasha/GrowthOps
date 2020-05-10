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
    return fetch('https://avocado.od.tech.my/stubs/gateway/login/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.status < 300) {
          dispatch(isLoading(false));
          response.json().then(responseJSON => {
            console.log('responseJSON', responseJSON);
            dispatch(loginSuccess(responseJSON));
          });
        } else {
          response.json().then(responseJSON => {
            console.log('responseJSON', responseJSON);
            dispatch(isLoading(false));
            dispatch(loginFailed(responseJSON.message));
          });
        }
      })
      .catch(error => {
        console.log('error', error);
        dispatch(isLoading(false));
        dispatch(loginFailed(error));
      });
  };
}
