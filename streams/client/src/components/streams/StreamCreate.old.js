import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
// Field is a React Component
// reduxForm is a function. It is = to the connect function from the react-redux lib.
// it makes sure we can call action creators and get form data into our component
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {

  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            {error}
          </div>
        </div>
      );
    };
  }

  // renderInput(formProps) {
  //   return (
  //     // <input type="text" value={formProps.input.value} onChange={formProps.input.onChange} />
  //     // equivalent to
  //     // takes all the key value pairs and add them as properties to the input element
  //     <input { ...formProps.input }/>
  //   );
  // }

  // equivalent to
  // we have to turn renderInput into an arrow function to pass
  // this to the renderErro function
  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    // handleSubmit is a function of redux form
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description" />
        <button className="ui button primary">Submit</button>
      </form>
    )
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
}

// same syntax as connect()(Component)
const formWrapped = reduxForm({
  form: 'streamCreate',
  validate: validate
  // = to
  // validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
