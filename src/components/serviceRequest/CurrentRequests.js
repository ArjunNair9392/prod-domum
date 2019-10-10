import React, { Component } from 'react';
import Cards from '../usableComponents/ServiceRequestCard';
import { ADDRCONFIG } from 'dns';

class CurrentRequests extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        Avatar:'AD',
        Title: '12345',
        Date: '9/9/2019',
        Content: 'This is test' 
      };
         
  }

  render() {
    const serviceRequestArray  = this.props.serviceRequestData.serviceRequest;
    
    return (
      <div>{ serviceRequestArray && serviceRequestArray.map(serviceRequest => {
        console.log(serviceRequest);
        let data = {
          Avatar:'AD',
          Title: serviceRequest.id,
          Date: '9/9/2019',
          Problem: serviceRequest.problem,
          Location: serviceRequest.location,
          Time: serviceRequest.time,
          Description:  serviceRequest.description
        };
        return (
          <Cards {...data}/>
        )
      })}
      

    </div>
    )
  }
}
export default CurrentRequests;