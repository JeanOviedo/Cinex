import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Reducer.jsx";
import thunk from "redux-thunk";

const composeHandler = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeHandler(applyMiddleware(thunk)));

export default store;
