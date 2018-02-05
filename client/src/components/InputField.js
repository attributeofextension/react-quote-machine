import React from 'react';

const InputField = (props) => {
  return (
    <div className="input-field">
      <input type="text" className="validate" onChange={props.onChange} />
      <label>{props.label}</label>
    </div>    
  );
}
export default InputField;