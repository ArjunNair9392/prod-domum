import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '../../widgets/usableComponents/TextField';
import DomumButton from '../../widgets/usableComponents/DomumButton';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />
    return (
      <Grid container justify="center">
        <Grid item xs={2}>
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
              <DomumButton Content='Login' onClick={this.handleSubmit}/>
            </Grid>
        </Grid>
      </Grid>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
