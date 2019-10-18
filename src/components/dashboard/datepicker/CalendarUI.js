import React, { Component } from 'react';
import Calendar from 'react-calendar';

class CalendarUI extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })
  formatMonthYear = (locale, date) => {
    console.log(date);
    console.log(locale);
  }

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          className="layoutContainer boxShadow"
        />
      </div>
    );
  }
}

export default CalendarUI;
