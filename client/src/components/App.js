import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Quotes from './Quotes';
import MachinesIndex from './MachinesIndex';
import ShowMachine from './ShowMachine';
import Landing from './Landing';
import MyMachine from './MyMachine';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/machines" component={MachinesIndex} />
          <Route exact path="/mymachine" component={MyMachine} />
          <Route path="/machines/:id" component={ShowMachine} />
        </div>
      </BrowserRouter>
    );
  }
}
export default connect(null,actions)(App);