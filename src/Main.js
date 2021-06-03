/* eslint-disable no-undef */
import React from 'react'
import appServices from "./lib/app-services/app-services";
import appReducer from './lib/store/app-reducer'
import appSagas from './lib/store/app-sagas'
import App from './App'

class Main extends React.Component {

    render(){

        return (
            <App />
        )
    }
}

export default appServices(Main, {appReducer, appSagas})