import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/header/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import ServiceRequest from './components/serviceRequest/ServiceRequest';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/home' component={Dashboard} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/home/submitservicerequest' component={Dashboard} />
            <Route path='/home/newsfeed' component={Dashboard} />
            <Route path='/home/marketplace' component={Dashboard} />
            <Route path='/home/userprofile' component={Dashboard} />
            <Route path='/home/events' component={Dashboard} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
