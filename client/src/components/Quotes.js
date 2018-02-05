import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import InputField from './InputField';
import TextField from './TextField';

class Quotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author : "",
      content: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.fetchMyQuotes();
  }
  renderQuotes(quotes) {
    if(quotes.length < 1) {
      return <div>No Quotes! Add a quote to your machine</div>
    }
    
    return quotes.map((quote,i) => {
      return (
        <li key={i}>
          <p>{quote.content}
          <br />
          --<strong>{quote.author}</strong>
          </p>
        </li>
      );
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const values = {
      author: this.state.author,
      content: this.state.content
    }
    this.props.postQuote(values);
  }
  render() {
    if(!this.props.myQuotes.quotes) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2 style={{textAlign:"center"}}>My Quotes</h2>
        <ul style={{width:500, margin:"auto"}}>
          {this.renderQuotes(this.props.myQuotes.quotes)} 
        </ul>
        <div>
          <h4 style={{textAlign:"center"}}>Add a Quote!</h4>
          <form onSubmit={this.handleSubmit} style={{width:500,margin:'auto'}} > 
              <InputField label="Author" onChange={e => this.setState({author:e.target.value})} />
              <TextField label="Content" onChange={e=>this.setState({content:e.target.value})} />
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
function mapStateToProps({myQuotes}) {
  return {myQuotes};
}
export default connect(mapStateToProps,actions)(Quotes);