/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Center Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'District',
    dataIndex: 'district_name',
    key: 'district_name',
  },
  {
    title: 'State',
    dataIndex: 'state_name',
    key: 'state_name',
  },
  {
    title: 'Pincode',
    dataIndex: 'pincode',
    key: 'pincode',
  }
];

class CentersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: []
    }
  }

  // componentDidMount() {
  //   let { singleDistrictCenters } = this.props
  //   if (singleDistrictCenters && singleDistrictCenters.length) {
  //     this.get18YrsCenters(singleDistrictCenters)
  //   }
  // }

  // componentDidUpdate() {
  //   let { singleDistrictCenters } = this.props
  //   if (singleDistrictCenters && singleDistrictCenters.length) {
  //     this.get18YrsCenters(singleDistrictCenters)
  //   }
  // }

  get18YrsCenters = (centers) => {
    let centersFor18 = []
    if (centers && centers.length > 0) {
      centers.map(center => {
        if (center.sessions && center.sessions.length > 0) {
          center.sessions.map(session => {
            if (session.min_age_limit && session.min_age_limit === 18) {
              centersFor18.push(center)
            }
          })
        }
      })
    }
    this.setState({
      centers: centersFor18
    })
  }

  render() {
    let { singleDistrictCenters } = this.props
    let { centers } = this.state
    return (
      <Table columns={columns} dataSource={singleDistrictCenters} />
    )
  }
}

const mapStateToProps = state => ({
  states: state.app.vaccineDetails.statesList,
  districts: state.app.vaccineDetails.districtsList,
  centers: state.app.vaccineDetails.centersList,
  countedStates: state.app.vaccineDetails.countedStates,
  countedDistricts: state.app.vaccineDetails.countedDistricts,
  singleDistrictCenters: state.app.vaccineDetails.singleDistrictCenters
})

export default connect(mapStateToProps, null)(CentersTable);