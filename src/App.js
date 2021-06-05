/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import './App.css';
import React, { Component } from 'react'
import { connect } from 'react-redux'

import NavTabs from "./app/components/NavTabs/NavTabs.js";
import CentersTable from "./app/components/CentersTable/CentersTable";
import { Layout } from 'antd';

import { fetchStates, fetchDistricts, fetchCenters, fetchSingleDistrictCenters } from "./lib/store/Vaccines/actions";

import 'antd/dist/antd.css'

const { Header, Content, Footer } = Layout;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state_id: 1
    }
  }

  componentDidMount() {
    this.props.fetchSingleDistrictCenters()
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.states !== this.props.states) {
    //   this.props.getDistricts(this.props.states)
    // }
  }

  render() {
    return (
      <Layout className="layout">
        <Header>
          <div className="logo" />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className='App'>
            {/* <NavTabs /> */}
            <CentersTable />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Vaccine Searcher ©2021 Created by Sai Teja</Footer>

      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  // states: state.app.vaccineDetails.statesList,
  // districts: state.app.vaccineDetails.districtsList,
  // centers: state.app.vaccineDetails.centersList
})

const mapDispatchToProps = dispatch => ({
  // getStates: () => dispatch(fetchStates()),
  // getDistricts: (payload) => dispatch(fetchDistricts(payload)),
  // getcenters: (payload) => dispatch(fetchCenters(payload))
  fetchSingleDistrictCenters: () => dispatch(fetchSingleDistrictCenters())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
