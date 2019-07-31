import React, { Component } from 'react';
import '../../css/layout.css';

class SubmitRequest extends Component {
  state = {
    description: '',
    summary: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="layoutContainer">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Submit Request</h5>

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

export default SubmitRequest;
