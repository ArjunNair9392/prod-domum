import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '../usableComponents/TextField';

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        eventName: '',
        location: '',
        description: '',
        date: '',
        time: ''
      };

  }

  handleChange = (e) => {
    console.log("on change");
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  }  

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="white">
        <div>
          <div className="input-field addPadding">
          <TextField value={this.state.eventName} onChange={this.handleChange} id="eventName"/>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
