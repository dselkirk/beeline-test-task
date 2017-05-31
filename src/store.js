import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

// add the middlewares
let middlewares = [];

// apply the middleware
let middleware = composeWithDevTools(applyMiddleware(...middlewares));

// create the store
const store = createStore(reducers, middleware);

// export
export { store };
