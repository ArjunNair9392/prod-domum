import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SubmitServiceRequest from '../serviceRequest/ServiceRequest';
import Events from '../events/Events';
import NewsFeedList from './layout/social/NewsFeedList';
import MarketPlace from './layout/marketPlace/MarketPlace';
import NavigationSideMenu from './layout/NavigationSideMenu';
import DatePicker from './datepicker/DatePicker';
import CalendarUI from './datepicker/CalendarUI';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import '../css/dashboard.css';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.onDayClick = this.onDayClick.bind(this);
    this.state = {
      selectedDate: new Date()
    };
  }

  onDayClick(newDay) {
    const { selectedDate } = this.state;

    this.setState({
      selectedDate: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        newDay
      )
    })
  }

  render() {
    console.log(this.props);
    const { auth, socialFeeds, marketPlace, serviceRequest } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />
    return (
      <div className="container">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={2}>
            <NavigationSideMenu />
          </Grid>
          <Grid item xs={6}>
            <Route
              path='/home/submitservicerequest'
              component={() => <SubmitServiceRequest serviceRequest={serviceRequest} />} />
            <Route
              path='/home/events'
              component={Events} />
            <Route
              path='/home/newsfeed'
              component={() => <NewsFeedList socialFeeds={socialFeeds} />} />
            <Route
              path='/home/marketplace'
              component={() => <MarketPlace marketPlace={marketPlace} />} />
          </Grid>
          <Grid item xs={3}>
            <CalendarUI />
          </Grid>
        </Grid>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    dashboard: 'testDashboard',
    auth: state.firebase.auth,
    socialFeeds: state.firestore.ordered.socialFeeds,
    marketPlace: state.firestore.ordered.marketPlace,
    serviceRequest: state.firestore.ordered.serviceRequest
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'socialFeeds' },
    { collection: 'serviceRequest' },
    { collection: 'marketPlace' },
  ])
)(Dashboard);
