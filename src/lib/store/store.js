/* eslint-disable no-unused-vars */
import makeStore from "./make-store";

let store = undefined;

const getStore = ({ appReducer = {}, appSagas = [] } = {}) => {
    if (store) {
        return store;
    } else {
        store = makeStore({ appReducer, appSagas });
        return store;
    }
};

const clearStore = () => {
    store = undefined;
}

export { getStore };
export { clearStore }
export { store }