import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginUserReducer } from "./redux/reducers/auth.reducers";

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const rootReducer = combineReducers({
  auth: LoginUserReducer,
});

//if already the cart items is presents
const initialState = {
  auth: {
    userInfo: userInfo,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
