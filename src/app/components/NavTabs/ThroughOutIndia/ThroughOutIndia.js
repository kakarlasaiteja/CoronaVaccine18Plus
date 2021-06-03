/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Table, Tag, Space } from 'antd';

const dummyCenters = [
  {
    "center_id": 1234,
    "name": "District General Hostpital",
    "name_l": "",
    "address": "45 M G Road",
    "address_l": "",
    "state_name": "Maharashtra",
    "state_name_l": "",
    "district_name": "Satara",
    "district_name_l": "",
    "block_name": "Jaoli",
    "block_name_l": "",
    "pincode": "413608",
    "lat": 28.7,
    "long": 77.1,
    "from": "09:00:00",
    "to": "18:00:00",
    "fee_type": "Free",
    "vaccine_fees": [
      {
        "vaccine": "COVISHIELD",
        "fee": "250"
      }
    ],
    "sessions": [
      {
        "session_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        "date": "31-05-2021",
        "available_capacity": 50,
        "min_age_limit": 18,
        "vaccine": "COVISHIELD",
        "slots": [
          "FORENOON",
          "AFTERNOON"
        ]
      }
    ]
  }
]

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

class ThroughOutIndia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: []
    }
  }

  componentDidUpdate() {
    let { states, districts, centers, countedStates, countedDistricts } = this.props
    if (centers && centers.length) {
      this.get18YrsCenters(centers)
    }
  }

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
    let { centers } = this.state
    return (
      <Table columns={columns} dataSource={centers} />
    )
  }
}

const mapStateToProps = state => ({
  states: state.app.vaccineDetails.statesList,
  districts: state.app.vaccineDetails.districtsList,
  centers: state.app.vaccineDetails.centersList,
  countedStates: state.app.vaccineDetails.countedStates,
  countedDistricts: state.app.vaccineDetails.countedDistricts
})

export default connect(mapStateToProps, null)(ThroughOutIndia);