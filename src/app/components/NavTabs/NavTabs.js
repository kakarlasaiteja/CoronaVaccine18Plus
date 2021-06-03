/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

import { Tabs } from 'antd';

import ThroughOutIndia from "./ThroughOutIndia/ThroughOutIndia";

const { TabPane } = Tabs;

class NavTabs extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Tabs>
        <TabPane tab="Throughout India" key="1">
          <ThroughOutIndia />
        </TabPane>
        <TabPane tab="By district" disabled key="2">
        </TabPane>
      </Tabs>
    )
  }
}

export default NavTabs;