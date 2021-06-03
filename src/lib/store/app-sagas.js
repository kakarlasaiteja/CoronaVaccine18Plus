/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-unused-vars */
import { all, fork } from 'redux-saga/effects';
import { loadStates, loadDistricts, loadCenters } from "./Vaccines/sagas";

const appSagas = function *() {
    yield all([
        fork(loadStates),
        fork(loadDistricts),
        fork(loadCenters)
    ])
}

export default [
    appSagas
]