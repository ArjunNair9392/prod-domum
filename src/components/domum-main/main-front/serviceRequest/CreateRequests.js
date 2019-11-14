import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, Button, DatePicker, TimePicker } from 'react-materialize';
import { createServiceRequest } from '../../../../store/actions/serviceRequestActions';

class CreateRequests extends Component {
  constructor(props) {
    super(props);
    this.state =
      {
        userId: '',
        problem: '',
        location: '',
        description: '',
        permission: '',
        date: '',
        time: ''
      };

  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('in createReuests');
    console.log(this.state);
    this.props.createServiceRequest(this.state);

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="white">
        <div>
          <div className="input-field addPadding">
            <Select value={this.state.problem} onChange={this.handleChange} id="problem">
              <option value="" disabled>
                Select the problem category
                </option>
              <option value="1">
                Option 1
                </option>
              <option value="2">
                Option 2
                </option>
              <option value="3">
                Option 3
                </option>
            </Select>
          </div>
          <div className="input-field addPadding">
            <Select value={this.state.location} onChange={this.handleChange} id="location">
              <option value="" disabled>
                Select the location
                  </option>
              <option value="1">
                Option 1
                  </option>
              <option value="2">
                Option 2
                  </option>
              <option value="3">
                Option 3
                  </option>
            </Select>
          </div>
          <div className="input-field addPadding">
            <label className="addPadding" htmlFor="description">Problem Description</label>
            <textarea id="description" className="materialize-textarea" onChange={this.handleChange} />
          </div>
          {/* <div className="input-field addPadding">
            <h6>Do we have your permission to enter the apartment?</h6>
            <p>
              <label>
                <input name="group1" type="radio" value="anytime" checked id="permission" onChange={this.handleChange}/>
                <span>At anytime</span>
              </label>
            </p>
            <p>
              <label>
                <input name="group1" type="radio" id="permission" value="appointment" onChange={this.handleChange}/>
                <span>By Appointment</span>
              </label>
            </p>
          </div> */}

          <div className="input-field addPadding">
            <h6>What is your preference on when we enter the apartment?</h6>

            <DatePicker  placeholder="Please select date" id="date" onChange={(date) => {
    this.state.date = date;
    this.setState({ date: this.state.date })}}></DatePicker>
            <Select value={this.state.time} id="time" onChange={this.handleChange}>
              <option value="" disabled>
                Select time
                </option>
              <option value="1">
                Option 1
                </option>
              <option value="2">
                Option 2
                </option>
              <option value="3">
                Option 3
                </option>
            </Select>
          </div>
          <div className="input-field" align="center">
            <button className="btn orange lighten-1 z-depth-0">Submit Request</button>
          </div>
        </div>
      </form>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    createServiceRequest: (serviceRequest) => dispatch(createServiceRequest(serviceRequest))
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRequests);
