/* eslint-disable no-unused-vars */
import { combineReducers, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const makeStore = ({ appReducer = {}, appSagas = [] } = {}) => {
    const sagaMiddleWare = createSagaMiddleware();

    const reducer = combineReducers({
        app: appReducer
    })

    const reduxStore = createStore(reducer, { }, applyMiddleware(sagaMiddleWare));

    appSagas.map(saga => sagaMiddleWare.run(saga));

    return reduxStore;
};

export default makeStore;