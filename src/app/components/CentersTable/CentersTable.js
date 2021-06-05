/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Tag, Space } from 'antd';

import "./CentersTable.css"

const sessionColumns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Dose 1 Availability',
    dataIndex: 'available_capacity_dose1',
    key: 'available_capacity_dose1',
  },
  {
    title: 'Dose 2 Availability',
    dataIndex: 'available_capacity_dose2',
    key: 'available_capacity_dose2',
  },
  {
    title: 'Vaccine',
    dataIndex: 'vaccine',
    key: 'vaccine',
  },
  {
    title: 'Slots Available',
    dataIndex: 'slots',
    key: 'slots',
    render: slots => (
      slots.map(slot => {
        return <>
          <div>{slot}</div>
        </>
      })
    )
  },
]

const columns = [
  {
    title: 'Center Name',
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Sessions',
    dataIndex: 'sessions',
    key: 'sessions',
    render: sessions => <Table columns={sessionColumns} dataSource={sessions} pagination={false} />
  },
  {
    title: 'Pincode',
    dataIndex: 'pincode',
    key: 'pincode',
  },
  {
    title: 'Fee Type',
    dataIndex: 'fee_type',
    key: 'fee_type',
  },
];

class CentersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let { singleDistrictCenters } = this.props
    return (
      <div className="centersTableWrapper">
        <Table className="centersTable" columns={columns} dataSource={singleDistrictCenters} />
      </div>
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