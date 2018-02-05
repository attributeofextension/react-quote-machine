import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';

class MachinesIndex extends Component {
  componentDidMount() {
    this.props.fetchQMs();
  }
  renderComponent() {
    return _.map(this.props.qms, machine => {
        return <li key={machine._id}><Link to={`/machines/${machine._id}`}>{machine.name}</Link></li>;
      }
    );
  }
  render() {
    console.log(this.props.qms);
    
    return (
      <div style={{width:500,margin:'auto'}}>
        <ul>
          {this.renderComponent()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { qms: state.qms };
}
export default connect(mapStateToProps,actions)(MachinesIndex);