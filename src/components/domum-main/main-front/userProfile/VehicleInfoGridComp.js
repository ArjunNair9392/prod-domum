import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../css/layout.css';
import Grid from '@material-ui/core/Grid';
import TextField from '../../../../widgets/usableComponents/TextField';
import Typography from '@material-ui/core/Typography';

const renderTextFieldOrVehicleMakeAndModel = (props) => {
    if(!props.isEditable){
      return (
        <Typography color="textPrimary" component="p" style={{ textAlign: 'center'}}>
          {props.vehicleInfo[0].vehicleMakeAndModel}
        </Typography>
      );
    }else{
      return (
        <TextField
          id={'vehicleMakeAndModel'}
          placeholder={'For e.g: Honda City'}
          fullWidth
          variant={'outlined'}
          onEdit={(e) => props.onChange(e, props.id)}
        />
      );
    }
  }

const renderTextFieldOrVehicleNumber = (props) => {
    if(!props.isEditable){
      return (
        <Typography color="textPrimary" component="p" style={{ textAlign: 'center'}}>
          {props.vehicleInfo[0].vehicleNumber}
        </Typography>
      );
    }else{
      return (
        <TextField
          id={'vehicleNumber'}
          placeholder={'For e.g: MH1234'}
          fullWidth
          variant={'outlined'}
          onEdit={(e) => props.onChange(e, props.id)}
        />
      );
    }
  }

const renderTextFieldOrParkingNumber = (props) => {
    if(!props.isEditable){
      return (
        <Typography color="textPrimary" component="p" style={{ textAlign: 'center'}}>
          {props.vehicleInfo[0].parkingNumber}
        </Typography>
      );
    }else{
      return (
        <TextField
          id={'parkingNumber'}
          placeholder={'For e.g: 36'}
          fullWidth
          variant={'outlined'}
          onEdit={(e) => props.onChange(e, props.id)}
        />
      );
    }
  }

const VehicleInfoGridComp = (props) => (
  <React.Fragment>
    <Grid container
      spacing={3}
      direction="row">
      <Grid item xs={1}>
        Vehicle Make/Model
      </Grid>

      <Grid item xs={4} className="marginLeft">
        {renderTextFieldOrVehicleMakeAndModel(props)}
      </Grid>
    </Grid>

    <Grid container
      spacing={3}
      direction="row">
      <Grid item xs={1}>
        Plate Number
      </Grid>

      <Grid item xs={4} className="marginLeft">
        {renderTextFieldOrVehicleNumber(props)}
      </Grid>
    </Grid>

    <Grid container
      spacing={3}
      direction="row">
      <Grid item xs={1}>
        Parking Number
      </Grid>

      <Grid item xs={4} className="marginLeft">
        {renderTextFieldOrParkingNumber(props)}
      </Grid>
    </Grid>
  </React.Fragment>
)

export default VehicleInfoGridComp;
