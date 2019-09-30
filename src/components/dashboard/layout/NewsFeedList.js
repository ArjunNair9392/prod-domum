import React, { Component } from 'react';
import DomumCard from '../../usableComponents/DomumCard';
import DomumButton from '../../usableComponents/DomumButton';
import DomumFloatingButton from '../../usableComponents/DomumFloatingButton';
import Grid from '@material-ui/core/Grid';
import { createSocialFeed } from '../../../store/actions/socialFeedActions';

import "react-tabs/style/react-tabs.css";
import '../../css/layout.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class NewsFeedList extends Component {

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
      <div className="container-border">
        <div className= "layoutContainer">
          <div id="social" className="col s10">
            <form onSubmit={this.handleSubmit} className="white">

              <div className="input-field addPadding">
                <label className="addPadding" htmlFor="userMessage">
                  Share something with your neighbours
                </label>
                <textarea id="userMessage" className="materialize-textarea" onChange={this.handleChange} />
              </div>
            </form>
            <div className="btnContainer">
              <div className="floatingBtnContainer">
                <DomumFloatingButton PhotoLibraryIcon />
                <DomumFloatingButton AddShoppingCartIcon />
                <DomumFloatingButton PollIcon />
              </div>
              <DomumFloatingButton SendIcon handleSubmit={this.handleSubmit} />
            </div>
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
