import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CreateRequests from './CreateRequests';
import CurrentRequests from './CurrentRequests';
import styles from '../../index.css';

class ServiceRequest extends Component {
  state = {
  }

  render() {

    return (
      
      <Tabs className="tab-demo z-depth-1">
        <h4>Service Requests</h4>
      <TabList>
        <Tab>Submit Service Request</Tab>
        <Tab>Current Service Request</Tab>
      </TabList>
  
      <TabPanel>
        <CreateRequests/>
      </TabPanel>
      <TabPanel>
        <CurrentRequests/>
      </TabPanel>
    </Tabs>
      
    )
  }
}


export default (ServiceRequest);
