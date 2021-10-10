import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from "redux-logger";
import persistStore from "redux-persist/es/persistStore";
import rootReducer from "./root-reducer";

const middlewares = [
  // logger
];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);

// const store = createStore(rootReducer, applyMiddleware(...middlewares));

// export default { store, persistor };
