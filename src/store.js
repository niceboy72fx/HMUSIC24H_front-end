import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import RootReducer from "./app/redux/reducer";
import rootSagas from "./app/redux/middleWare";

const sagaMiddleWare = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSagas);

export default store;
