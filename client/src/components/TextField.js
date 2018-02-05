import React from 'react';

const TextField = (props) => {
  return (
    <div className="input-field">
      <textarea className="materialize-textarea" onChange={props.onChange}></textarea>
      <label>{props.label}</label>
    </div>
  );
}
export default TextField;