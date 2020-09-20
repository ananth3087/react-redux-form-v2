import * as redux from "redux";
import { reducer as formReducer } from "redux-form";
import registerReducer from "./reducer/register";

const rootReducer = redux.combineReducers({
  registration: registerReducer,
  form: formReducer,
});

const store = redux.createStore(rootReducer);
export default store;
