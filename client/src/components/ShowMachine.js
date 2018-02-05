import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ShowMachine extends Component {
  constructor(props) {
    super(props);
    this.state = { quote: {author:"", content:"You have no quotes!"}};
    this.randomizeQuote = this.randomizeQuote.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchQM(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.qm) {
      const i = Math.floor(Math.random() * nextProps.qm.quotes.length);
      this.setState({quote: nextProps.qm.quotes[i]});
    }
  }
  randomizeQuote() {
    var quote = this.state.quote;
    while( quote.content === this.state.quote.content) {
      const i = Math.floor(Math.random() * this.props.qm.quotes.length);
      quote = this.props.qm.quotes[i];
    }
    this.setState({quote:quote});
  }
  renderQuote(quote) {
    return (
      <p>{quote.content}<br />
      --<strong>{quote.author}</strong>
      </p>
    );
  }

  render() {
    if(!this.props.qm) {
      return <div>Loading...</div>;
    }
    const authorURI = encodeURIComponent(' -' + this.state.quote.author);
    const contentURI = encodeURIComponent('"' + this.state.quote.content + '"');

    return (
      <div className="card blue-grey darken-1" style={{width:500,margin:'auto',marginTop:50}}>
        <div className="card-content white-text">
          <span className="card-title">{this.props.qm.name}</span>
          {this.renderQuote(this.state.quote)}
        </div>
        <div className="card-action" style={{padding:10}}>
            <a className="waves-effect waves-light btn" href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${contentURI}${authorURI}"`} target="_blank">Post to Twitter</a>
            <button className="btn waves-effect waves-light right" onClick={()=>this.randomizeQuote()}>New Quote</button>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state,ownProps) {
  return { qm: state.qms[ownProps.match.params.id]};
}
export default connect(mapStateToProps,actions)(ShowMachine);