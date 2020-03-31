import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: storageSession
  // whitelist: ["cardListReducer"] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(preloadedState) {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(pReducer, preloadedState, composedEnhancers);

  const persistor = persistStore(store);

  return { persistor, store };
}
