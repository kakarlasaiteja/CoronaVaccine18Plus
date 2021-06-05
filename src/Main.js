/* eslint-disable no-undef */
import React from 'react'
import appServices from "./lib/app-services/app-services";
import appReducer from './lib/store/app-reducer'
import appSagas from './lib/store/app-sagas'
import App from './App'
import ReactGa from "react-ga";

class Main extends React.Component {

  componentDidMount() {
    ReactGa.initialize("UA-198793459-1")
    ReactGa.pageview('/')
}

  render() {

    return (
      <App />
    )
  }
}

export default appServices(Main, { appReducer, appSagas })