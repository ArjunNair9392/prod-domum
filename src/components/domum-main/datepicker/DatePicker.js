import React, { Component } from 'react';
import Month from './Month';
import '../../css/DatePicker.css';

class DatePicker extends Component {
  render() {
    const { fullDate, onDayClick } = this.props;

    const dateNumber = fullDate.getDate();
    const monthNumber = fullDate.getMonth();
    const yearNumber = fullDate.getFullYear();
    const monthName = getMonthName(monthNumber);

    return (
      <div className='DatePickerContainer'>
        <div className='DatePickerContainer_Title'>{monthName}</div>
        <Month
          date={dateNumber}
          month={monthNumber}
          year={yearNumber}
          onDayClick={onDayClick}
        />
        <div className='DatePickerContainer_Title'>Upcoming Events</div>
        No Events
      </div>
    )
  }
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

function getMonthName(index) {
  return months[index];
}

export default DatePicker;
