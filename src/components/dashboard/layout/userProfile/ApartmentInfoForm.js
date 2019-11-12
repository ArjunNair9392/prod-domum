import React, { Component } from 'react';
import DomumCard from '../../../usableComponents/DomumCard';
import DomumButton from '../../../usableComponents/DomumButton';
import TextField from '../../../usableComponents/TextField';
import Grid from '@material-ui/core/Grid';
import DomumFloatingButton from '../../../usableComponents/DomumFloatingButton';
import { updateApartmentInfo } from '../../../../store/actions/updateApartmentInfoActions';
import Typography from '@material-ui/core/Typography';

import "react-tabs/style/react-tabs.css";
import '../../../css/layout.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class ApartmentInfoForm extends Component {

  state = {
    userId: 'test1234',
    apartmentNumber: '',
    isEditable: false,
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    this.props.updateApartmentInfo(this.state);

    this.setState({
      apartmentNumber: '',
      isEditable: false
    });
  }

  handleEdit = (e) => {
    this.setState({
      isEditable: true
    });
  }

  renderTextFieldOrText = (props) => {
    if(!this.state.isEditable){
      return (
        <Typography color="textPrimary" component="p" style={{ textAlign: 'center'}}>
          {props.apartmentInfo[0].apartmentNumber}
        </Typography>
      );
    }else{
      return (
        <TextField
          id={'apartmentNumber'}
          placeholder={'For e.g: A-105'}
          fullWidth
          variant={'outlined'}
          onEdit={this.handleChange}
        />
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
    return (
      <React.Fragment>
        <Grid container
          spacing={3}
          direction="row">
          <Grid item xs={1}>
            Apartment Number
          </Grid>

          <Grid item xs={4} className="marginLeft">
            {this.renderTextFieldOrText(this.props)}
          </Grid>
        </Grid>

        <div className="btnContainer">
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
    updateApartmentInfo: (apartmentInfo) => dispatch(updateApartmentInfo(apartmentInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentInfoForm);
