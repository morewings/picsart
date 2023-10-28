import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import type { FC, ReactNode } from "react";

import { promiseResolverMiddleware } from "./promiseResolverMiddleware";
import { UsersReducer } from "./../features/users";
import { ThemeReducer } from "./../features/themes";

const rootReducer = combineReducers({
  users: UsersReducer,
  themes: ThemeReducer,
});

/**
 * Use Redux Dev Tools, if they are installed in browser, otherwise compose of Redux
 */
/* eslint-disable no-underscore-dangle, ssr-friendly/no-dom-globals-in-module-scope */
// @ts-expect-error redux devtools set up
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable no-underscore-dangle, ssr-friendly/no-dom-globals-in-module-scope */

const middlewareEnhancer = applyMiddleware(promiseResolverMiddleware);

const composedEnhancers = composeEnhancers(middlewareEnhancer);

export const store = createStore(rootReducer, undefined, composedEnhancers);

const ReduxProvider: FC<{ children?: ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
