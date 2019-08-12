import React, { Component } from 'react';
import { BrowserRouter,} from 'react-router-dom';
import SubmitServiceRequest from './layout/SubmitServiceRequest';
import DatePicker from './datepicker/DatePicker';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import '../css/dashboard.css';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      selectedDate: new Date()
    };
  }

  render() {
    console.log(this.props);
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <BrowserRouter>
      <div className="container">
            <div className="innerContainer center z-depth-2">
              <div className="middleStyle">
                {
                  this.props.location.pathname === "/home/submitservicerequest" && <SubmitServiceRequest />
                }
              </div>
              <div className="datePickerStyle">
                <DatePicker fullDate={this.state.selectedDate} onDayClick={this.onDayClick} />
              </div>
            </div>
          </div>
      </BrowserRouter>
    );
  }

  onDayClick(newDay) {
    const {selectedDate} = this.state;

    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        newDay
      )
    })
  }
};

const mapStateToProps = (state) => {
  return {
    dashboard: 'testDashboard',
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Dashboard);
