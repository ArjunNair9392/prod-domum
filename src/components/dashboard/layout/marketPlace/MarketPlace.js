import React, { Component } from 'react';
import DomumCard from '../../../usableComponents/DomumCard';
import DomumButton from '../../../usableComponents/DomumButton';
import DomumFloatingButton from '../../../usableComponents/DomumFloatingButton';
import Grid from '@material-ui/core/Grid';
import { createMarketPlace } from '../../../../store/actions/marketPlaceActions';

import "react-tabs/style/react-tabs.css";
import '../../../css/layout.css';

import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class MarketPlace extends Component {

  state = {
    userName: 'Arjun Nair',
    name: '',
    price: '',
    description: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createMarketPlace(this.state);

    this.setState({
      userName: "",
      description:""
    });
  }

  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' />

    const { marketPlace } = this.props;
    return (
      <div>
        <div className= "layoutContainer boxShadow">
          <div id="social" className="col s10">
            <form onSubmit={this.handleSubmit} className="white">

              <div className="input-field addPadding">
                <label className="addPadding" htmlFor="name">
                  Name
                </label>
                <textarea id="name" className="materialize-textarea" onChange={this.handleChange} />
              </div>

              <div className="input-field addPadding">
                <label className="addPadding" htmlFor="description">
                  Description
                </label>
                <textarea id="description" className="materialize-textarea" onChange={this.handleChange} />
              </div>

              <div className="input-field addPadding">
                <label className="addPadding" htmlFor="price">
                  Price
                </label>
                <textarea id="price" className="materialize-textarea" onChange={this.handleChange} />
              </div>
            </form>
            <div className="btnContainer">
              <DomumFloatingButton SendIcon handleSubmit={this.handleSubmit} />
            </div>
          </div>
        </div>
          { marketPlace && marketPlace.map(marketPlace => {
            return (
              <DomumCard
                Title={marketPlace.Name}
                Content={marketPlace.description}
                Avatar='AN'
                key={marketPlace.id} />
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
    createMarketPlace: (marketPlace) => dispatch(createMarketPlace(marketPlace))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MarketPlace);
