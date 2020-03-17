import { createStore, combineReducers } from "redux";

import dashboard from "./reducers/dashboardReducer";
import user from "./reducers/userReducer";

export default createStore(
  combineReducers({
    dashboard,
    user
  }),
  {}
);
