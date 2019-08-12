import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { createServiceRequest } from '../../../store/actions/serviceRequestActions';
import '../../css/layout.css';

class SubmitServiceRequest extends Component {
  state = {
    description: '',
    summary: '',
    userID: this.props.auth.uid
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.props.auth.uid){
      // console.log('dsadasdasdas', this.props.auth.uid);
      // this.setState({
      //   userID: this.props.auth.uid
      // });
      this.props.createServiceRequest(this.state);
      // console.log(this.state);
    }
  }

  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div className="layoutContainer">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Submit Service Request</h5>

          <div className="input-field addPadding">
            <label className="addPadding" htmlFor="description">Description</label>
            <input type="text" id="description" onChange={this.handleChange} />
          </div>

          <div className="input-field addPadding">
            <label className="addPadding" htmlFor="summary">Summary</label>
            <textarea id="summary" className="materialize-textarea" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn orange lighten-1 z-depth-0">Submit Request</button>
          </div>
        </form>
      </div>
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
    createServiceRequest: (serviceRequest) => dispatch(createServiceRequest(serviceRequest))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitServiceRequest);
