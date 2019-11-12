import React, { Component } from 'react';
import DomumCard from '../../../usableComponents/DomumCard';
import DomumButton from '../../../usableComponents/DomumButton';
import TextField from '../../../usableComponents/TextField';
import Grid from '@material-ui/core/Grid';
import DomumFloatingButton from '../../../usableComponents/DomumFloatingButton';

import "react-tabs/style/react-tabs.css";
import '../../../css/layout.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class StaffInfoForm extends Component {


  render() {

    return (
      <React.Fragment>
        <Grid container
          spacing={3}
          direction="row">
          <Grid item xs={1}>
            First Name
          </Grid>

          <Grid item xs={4} className="marginLeft">
            <TextField
              placeholder={'First Name'}
              fullWidth
              variant={'outlined'}
            />
          </Grid>
        </Grid>

        <Grid container
          spacing={3}
          direction="row">
          <Grid item xs={1}>
            Last Name
          </Grid>

          <Grid item xs={4} className="marginLeft">
            <TextField
              placeholder={'Last Name'}
              fullWidth
              variant={'outlined'}
            />
          </Grid>
        </Grid>

        <Grid container
          spacing={3}
          direction="row">
          <Grid item xs={1}>
            Aadhar/Pan Number
          </Grid>

          <Grid item xs={4} className="marginLeft">
            <TextField
              placeholder={'Enter your aadhar card number'}
              fullWidth
              variant={'outlined'}
            />
          </Grid>
        </Grid>

        <div className="btnContainer">
          <DomumFloatingButton SendIcon handleSubmit={this.handleSubmit} />
        </div>
      </React.Fragment>
    )
  };
}

export default StaffInfoForm;
