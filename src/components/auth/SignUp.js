import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '../../widgets/usableComponents/TextField';
import DomumButton from '../../widgets/usableComponents/DomumButton';
import { addUser } from '../../store/actions/signUpActions';
import SignIn from './SignIn';


class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber:'',
    redirectToLogin:false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('in SignUp');
    console.log(this.state);
    this.props.addUser(this.state);

  }

  render() {
    const { auth } = this.props;
    if(this.state.redirectToLogin){
      return <Redirect to='/signin' />
    }
    return (
      <Grid container justify="center">
        <Grid item xs={2}>
            <TextField
              id={'firstName'}
              label={'First Name'}
              fullWidth
              onEdit={this.handleChange}
            />
            <br/>
            <TextField
              id={'lastName'}
              label={'Last Name'}
              fullWidth
              onEdit={this.handleChange}
            />
            <br/>
            <TextField
              id={'phoneNumber'}
              label={'Phone Number'}
              fullWidth
              onEdit={this.handleChange}
            />
            <br/>
            <TextField
              id={'email'}
              label={'Email id'}
              fullWidth
              onEdit={this.handleChange}
            />
            <br/>
            <TextField
              id={'password'}
              label={'Password'}
              fullWidth
              onEdit={this.handleChange}
              type={'password'}
            />
            <br/>
            <Grid container justify="center">
            <DomumButton
              Content='Register'
              onClick={this.handleSubmit}
            />
            </Grid>
        </Grid>
      </Grid>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user))
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    signUp: state.signUp
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
