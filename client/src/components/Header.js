import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Header extends Component {
  renderRightContent() {
    switch(this.props.auth) {
      case null : return;
      case false : return <li><a href="/auth/twitter">Login with Twitter</a></li>;
      default : return [
        <li key="3"><Link to="/machines">All Machines</Link></li>,
        <li key="4"><Link to="/mymachine">My Machine</Link></li>,
        <li key="1"><Link to="/quotes">Quotes</Link></li>,
        <li key="2"><a href="/api/logout">Logout</a></li>
      ];
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper container">
        <Link 
          className="brand-logo"
          to={this.props.auth ? "/machines/my" : "/" }
        >Quote Machine
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {this.renderRightContent()}
        </ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({auth}) {
  return { auth };
}

export default connect(mapStateToProps)(Header);