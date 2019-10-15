import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../css/layout.css';

const Menubar = () => (
  <div className= "menubarContainer">
    <ul>
      <div className="menuBackground">
        <li className="addPaddingTopBottom addPadding"><NavLink to="/home/userprofile">Arjun Nair</NavLink></li>
      </div>
      <div className="menuBackground">
        <li className="addPaddingTopBottom addPadding"><NavLink to="/home/newsfeed">News</NavLink></li>
      </div>
      <div className="menuBackground">
        <li className="addPaddingTopBottom addPadding"><NavLink to="/home/submitservicerequest">Submit Service Request</NavLink></li>
      </div>
      <div className="menuBackground">
        <li className="addPaddingTopBottom addPadding"><NavLink to="/home/payment">Make a Payment</NavLink></li>
      </div>
      <div className="menuBackground">
        <li className="addPaddingTopBottom addPadding"><NavLink to="/home/visitor">Visitor</NavLink></li>
      </div>
      <div className="menuBackground">
        <li className="addPaddingTopBottom addPadding"><NavLink to="/home/marketplace">MarketPlace</NavLink></li>
      </div>
      <div className="menuBackground">
        <li className="addPaddingTopBottom addPadding"><NavLink to="/home/events">Events</NavLink></li>
      </div>
    </ul>
  </div>
)

export default Menubar;
