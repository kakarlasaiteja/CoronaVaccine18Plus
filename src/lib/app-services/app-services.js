/* eslint-disable no-unused-vars */
import React from 'react'
import { Provider } from 'react-redux';

import { getStore } from '../store/store';

const appServices = (AppComponent, { appReducer = {}, appSagas = [] } = {}) => {

    class WarppedApplication extends React.Component {

        constructor() {
            super();
            this.store = getStore({ appReducer, appSagas });
        }
        render() {

            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    Provider,
                    { store: this.store },
                    React.createElement(
                        'div',
                        null,
                        React.createElement(AppComponent, null)
                    )
                )
            )
        }
    }

    return WarppedApplication;
};

export default appServices