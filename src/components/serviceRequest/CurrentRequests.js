import React, { Component } from 'react';
import Cards from '../usableComponents/DomumCard';
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
      let props = {
        Avatar:'AD',
        Title: '12345',
        Date: '9/9/2019',
        Content: 'This is test' 
      };
    return (<Cards {...props}/>);

  }
}

export default CurrentRequests;