import React, { Component } from 'react';
import "react-tabs/style/react-tabs.css";
import EventTabs from './eventTabs';

class Events extends Component {
  state = {
  }

  render() {

    return (
      <div> 
          {console.log("here")}
        <EventTabs serviceRequestData={(this.props)}/>
      </div>
    );
  }
}


export default (Events);
