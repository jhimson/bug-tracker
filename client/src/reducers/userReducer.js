export const userRegisterReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'USER_REGISTER_REQUEST':
      return { ...state, loading: true };

    case 'USER_REGISTER_SUCCESS':
      return { ...state, loading: false, userInfo: payload };

    case 'USER_REGISTER_FAIL':
      return { ...state, loading: false, error: payload };

    case 'USER_REGISTER_RESET':
      return { ...state, loading: false, userInfo: {} };

    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case 'USER_LOGIN_REQUEST':
      return { ...state, loading: true };

    case 'USER_LOGIN_SUCCESS':
      return { ...state, loading: false, userInfo: payload };

    case 'USER_LOGIN_FAIL':
      return { ...state, loading: false, error: payload };

    case 'USER_LOGOUT':
      return { ...state, userInfo: null };

    default:
      return state;
  }
};
