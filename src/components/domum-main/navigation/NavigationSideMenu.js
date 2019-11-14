import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/layout.css';
import { MenuList } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

class NavigationSideMenu extends Component {
  render() {
    return (
      <MenuList>
        <MenuItem>
          <NavLink to="/home/userProfile">User Profile</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/home/newsfeed">News</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/home/submitservicerequest">Service Requests</NavLink>
        </MenuItem>
        <MenuItem><NavLink to="/home/">Payments</NavLink> </MenuItem>
        <MenuItem><NavLink to="/home/">Visitors</NavLink></MenuItem>
        <MenuItem><NavLink to="/home/">Reservations</NavLink></MenuItem>
        <MenuItem><NavLink to="/home/events">Events</NavLink></MenuItem>
        <MenuItem><NavLink to="/home/marketplace">Marketplace</NavLink></MenuItem>

      </MenuList>
    );
  }
}

export default NavigationSideMenu;
