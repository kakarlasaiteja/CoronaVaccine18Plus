/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavTabs from "./app/components/NavTabs/NavTabs.js";

import { fetchStates, fetchDistricts, fetchCenters } from "./lib/store/Vaccines/actions";

import 'antd/dist/antd.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state_id: 1
    }
  }

  componentDidMount() {
    this.props.getStates()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.states !== this.props.states) {
      this.props.getDistricts(this.props.states)
    }
  }

  render() {
    return (
      <div className='App'>
        <NavTabs />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  states: state.app.vaccineDetails.statesList,
  districts: state.app.vaccineDetails.districtsList,
  centers: state.app.vaccineDetails.centersList
})

const mapDispatchToProps = dispatch => ({
  getStates: () => dispatch(fetchStates()),
  getDistricts: (payload) => dispatch(fetchDistricts(payload)),
  getcenters: (payload) => dispatch(fetchCenters(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
