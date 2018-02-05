import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputField from './InputField'
import * as actions from '../actions';

class MyMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {  inputName : "",
                    quote: {author:"", content:"You have no quotes!"}};
    this.randomizeQuote = this.randomizeQuote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchMyQuotes();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.myQuotes) {
      const i = Math.floor(Math.random() * nextProps.myQuotes.quotes.length);
      this.setState({quote: nextProps.myQuotes.quotes[i]});
    }
  }
  randomizeQuote() {
    var quote = this.state.quote;
    while( quote.content === this.state.quote.content) {
      const i = Math.floor(Math.random() * this.props.myQuotes.quotes.length);
      quote = this.props.myQuotes.quotes[i];
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
  onSubmit(e) {
    e.preventDefault();
    const values = {
      name: this.state.inputName
    };
    console.log(values);
    this.props.postName(values);
  }

  render() {
    if(!this.props.myQuotes.quotes) {
      return <div>Loading...</div>;
    }
    const authorURI = encodeURIComponent(' -' + this.state.quote.author);
    const contentURI = encodeURIComponent('"' + this.state.quote.content + '"');

    return (
      <div>
        <div className="card blue-grey darken-1" style={{width:500,margin:'auto',marginTop:50}}>
          <div className="card-content white-text">
            <span className="card-title">{this.props.myQuotes.name}</span>
            {this.renderQuote(this.state.quote)}
          </div>
          <div className="card-action" style={{padding:10}}>
            <a className="waves-effect waves-light btn" href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${contentURI}${authorURI}"`} target="_blank">Post to Twitter</a>
            <button className="btn waves-effect waves-light right" onClick={()=>this.randomizeQuote()}>New Quote</button>
          </div>
        </div>
        <div style={{width:500,margin:'auto'}}>
          Your machine is publicly available here:
          <a href={`/machines/${this.props.myQuotes._id}`}> {`/machines/${this.props.myQuotes._id}`}</a>
        </div>
        <form style={{width:500,margin:'auto'}} onSubmit={this.onSubmit}>
          <h5>Give your Quote Machine a name</h5>
          <InputField label="name" value={this.state.inputName} onChange={(e)=>this.setState({inputName:e.target.value})} />
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
        </form>
      </div>
    );
  }
}
function mapStateToProps({myQuotes}) {
  return {myQuotes};
}
export default connect(mapStateToProps,actions)(MyMachine);