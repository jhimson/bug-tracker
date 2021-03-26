import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { userRegisterReducer } from './reducers/userReducer';

const middleware = [thunk];

const initialState = {
  userRegister: { userInfo: { message: null }, error: null },
};

const reducer = combineReducers({
  userRegister: userRegisterReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
