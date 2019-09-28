import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import SubmitServiceRequest from './layout/SubmitServiceRequest';
import NewsFeedList from './layout/NewsFeedList';
import Menubar from './layout/Menubar';
import DatePicker from './datepicker/DatePicker';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
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
    const {selectedDate} = this.state;

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
    const { auth, socialFeeds } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    return (
      <div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={2}>
            <Menubar />
          </Grid>

          <Grid item xs={6}>
            <Route path='/home/submitservicerequest' component={SubmitServiceRequest} />
            <Route
              path='/home/newsfeed'
              component={() => <NewsFeedList socialFeeds={socialFeeds}/> } />
          </Grid>

          <Grid item xs={3}>
            <DatePicker fullDate={this.state.selectedDate} onDayClick={this.onDayClick} />
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
    socialFeeds: state.firestore.ordered.socialFeeds
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'socialFeeds' }
  ])
)(Dashboard);
