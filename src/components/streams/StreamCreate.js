import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput({ input, label }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} />
      </div>
    )
  }
  render() {
    // use FIELD when wanting to show a field to a user
    return (
      <form className="ui form">
        <Field name="Title" component={this.renderInput} label="Enter Title" />
        <Field name="Description" component={this.renderInput} label="Enter Description" />
      </form>
    )
  };
};

export default reduxForm({
  form: 'streameCreate'
})(StreamCreate);
