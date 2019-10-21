import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import CreateRequests from './CreateRequests';
import CurrentRequests from './CurrentRequests';
import ServiceTabs from './serviceTabs';

class ServiceRequest extends Component {
  state = {
  }

  render() {

    return (
      <div> 
        <ServiceTabs serviceRequestData={(this.props)}/>
      </div>
    );
  }
}


export default (ServiceRequest);
