import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DomumCard from '../../usableComponents/DomumCard';
import DomumButton from '../../usableComponents/DomumButton';
import Grid from '@material-ui/core/Grid';
import M from "materialize-css";
import { createSocialFeed } from '../../../store/actions/socialFeedActions';

import "react-tabs/style/react-tabs.css";
import '../../css/layout.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class NewsFeedList extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  state = {
    userName: 'Arjun Nair',
    userMessage: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createSocialFeed(this.state);

    this.setState({
      userMessage: ""
    });
  }

  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    const { socialFeeds } = this.props;
    return (
      <div>
        <div className= "layoutContainer">
          <div id="social" className="col s12">
            <form onSubmit={this.handleSubmit} className="white">

              <div className="input-field addPadding">
                <label className="addPadding" htmlFor="userMessage">
                  Share something with your neighbours
                </label>
                <textarea id="userMessage" className="materialize-textarea" onChange={this.handleChange} />
              </div>

              <DomumButton Content='Post'/>
            </form>
          </div>
        </div>
        <Grid
          className="cardMarginTop"
        >
          { socialFeeds && socialFeeds.map(socialFeed => {
            return (
              <DomumCard
                Title={socialFeed.userName}
                Content={socialFeed.userMessage}
                Avatar='AN'
                key={socialFeed.id} />
            )
          })}
        </Grid>
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
    createSocialFeed: (socialFeeds) => dispatch(createSocialFeed(socialFeeds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedList);
