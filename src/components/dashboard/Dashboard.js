import React, { Component } from 'react';
import { BrowserRouter,} from 'react-router-dom';
import SubmitRequest from './layout/SubmitRequest';
import DatePicker from './datepicker/DatePicker';
import { connect } from 'react-redux';
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
    return (
      <BrowserRouter>
      <div className="container">
            <div className="innerContainer center z-depth-2">
              <div className="middleStyle">
                {
                  this.props.location.pathname === "/home/submitrequest" && <SubmitRequest />
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
    dashboard: 'testDashboard'
  }
}

export default connect(mapStateToProps)(Dashboard);
