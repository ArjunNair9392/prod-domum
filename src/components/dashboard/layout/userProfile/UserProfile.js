import React, { Component } from 'react';
import DomumCard from '../../../usableComponents/DomumCard';
import DomumButton from '../../../usableComponents/DomumButton';
import DomumFloatingButton from '../../../usableComponents/DomumFloatingButton';
import Grid from '@material-ui/core/Grid';
import ApartmentInfoForm from './ApartmentInfoForm';
import VehicleInfoForm from './VehicleInfoForm';
import StaffInfoForm from './StaffInfoForm';

import "react-tabs/style/react-tabs.css";
import '../../../css/layout.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class UserProfile extends Component {


  render() {

    return (
      <div className="layoutContainer">
          <DomumCard
            Title="My House Info"
            Content= <ApartmentInfoForm apartmentInfo={this.props.apartmentInfo} />
            key={1}/>

          <DomumCard
            Title="My Vehicle Info"
            Content=<VehicleInfoForm vehicleInfo={this.props.vehicleInfo} />
            key={2}/>

          <DomumCard
            Title="My Staff Info"
            Content=<StaffInfoForm />
            key={3}/>
      </div>
    )
  };
}

export default UserProfile;
