import React, { Component } from 'react';
import DomumCard from '../../../../widgets/usableComponents/DomumCard';
import DomumButton from '../../../../widgets/usableComponents/DomumButton';
import DomumFloatingButton from '../../../../widgets/usableComponents/DomumFloatingButton';
import Grid from '@material-ui/core/Grid';
import { createSocialFeed } from '../../../../store/actions/socialFeedActions';

import "react-tabs/style/react-tabs.css";
import '../../../css/layout.css';
import SocialPoll from './SocialPoll';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class NewsFeedList extends Component {

  constructor(props) {
    super(props);
    this.SocialPollRef = React.createRef();
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

  handleDialogClick = (e) => {
    this.SocialPollRef.current.handleClickOpen();
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
        <div className= "layoutContainer boxShadow">
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
                <DomumFloatingButton PollIcon handleSubmit={this.handleDialogClick}/>
              </div>
              <DomumFloatingButton SendIcon handleSubmit={this.handleSubmit} />
            </div>
          </div>
          <SocialPoll ref={this.SocialPollRef}/>
        </div>
          { socialFeeds && socialFeeds.map(socialFeed => {
            return (
              <DomumCard
                Title={socialFeed.userName}
                Content={socialFeed.userMessage}
                Avatar='AN'
                key={socialFeed.id} />
            )
          })}
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
