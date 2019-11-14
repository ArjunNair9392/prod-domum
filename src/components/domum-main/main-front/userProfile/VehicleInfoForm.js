import React, { Component } from 'react';
import DomumCard from '../../../../widgets/usableComponents/DomumCard';
import DomumButton from '../../../../widgets/usableComponents/DomumButton';
import TextField from '../../../../widgets/usableComponents/TextField';
import Grid from '@material-ui/core/Grid';
import DomumFloatingButton from '../../../../widgets/usableComponents/DomumFloatingButton';
import VehicleInfoGridComp from './VehicleInfoGridComp';
import { updateVehicleInfo } from '../../../../store/actions/updateVehicleInfoActions';
import Typography from '@material-ui/core/Typography';
import "react-tabs/style/react-tabs.css";
import '../../../css/layout.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class VehicleInfoForm extends Component {

  state = {
    numChildren: 1,
    userId: 'test1234',
    isEditable: false,
    vehicleInfo: [{
      vehicleMakeAndModel: '',
      vehicleNumber: '',
      parkingNumber: ''
    }]
  }

  handleChange = (e, id) => {
    const newState = this.state.vehicleInfo.map((vehicleInfo, sid) => {
      if(id !== sid) return vehicleInfo;
      return {
        ...vehicleInfo,
        [e.target.id]: e.target.value
      };
    });
    this.setState({
      vehicleInfo: newState
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    this.props.updateVehicleInfo(this.state.vehicleInfo);

    this.setState({
      isEditable: false,
      vehicleInfo: [{
        vehicleMakeAndModel: '',
        vehicleNumber: '',
        parkingNumber: ''
      }]
    });
  }

  handleEdit = (e) => {
    this.setState({
      isEditable: true
    });
  }

  onAddChild = () => {
    this.setState({
      numChildren: this.state.numChildren + 1,
      vehicleInfo: this.state.vehicleInfo.concat([{
        vehicleMakeAndModel: '',
        vehicleNumber: '',
        parkingNumber: ''
      }])
    });
  }

  onRemoveChild = (idx) => {
    this.state.vehicleInfo.pop();
    this.setState({
      numChildren: this.state.numChildren - 1,
      vehicleInfo: this.state.vehicleInfo
    });
  }

  showFloatingIcons = (idx) => {
    if(this.state.numChildren>1 && this.state.isEditable){
      return (
        <React.Fragment>
          <DomumFloatingButton AddCircleIcon handleSubmit={this.onAddChild}/>
          <DomumFloatingButton RemoveCircleIcon handleSubmit={this.onRemoveChild}/>
        </React.Fragment>
      );
    }else if(this.state.isEditable) {
      return (
        <DomumFloatingButton AddCircleIcon handleSubmit={this.onAddChild}/>
      );
    }
  }

  renderIcon = (props) => {
    if(!this.state.isEditable){
      return (
        <DomumFloatingButton EditIcon handleSubmit={this.handleEdit} />
      );
    }else{
      return (
        <DomumFloatingButton SendIcon handleSubmit={this.handleSubmit} />
      );
    }
  }

  render() {
    const children = [];
    for (var i = 0; i < this.state.numChildren; i += 1) {
      children.push(<VehicleInfoGridComp key={i} />);
    };

    return (
      <React.Fragment>
        {this.state.vehicleInfo.map((vehicleInfo, id) => (
          <VehicleInfoGridComp
            key={id}
            id={id}
            onChange={this.handleChange}
            vehicleInfo={this.props.vehicleInfo}
            isEditable={this.state.isEditable}
          />
        ))}
        <div className="btnContainer">
          <div className="floatingBtnContainer">
            {this.showFloatingIcons()}
          </div>
          {this.renderIcon(this.props)}
        </div>
      </React.Fragment>
    )
  };
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateVehicleInfo: (vehicleInfo) => dispatch(updateVehicleInfo(vehicleInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VehicleInfoForm);
