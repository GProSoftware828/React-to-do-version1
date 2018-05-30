
import React from 'react';
import { Field, reduxForm } from 'redux-form';
//import submit from './submit';

const renderField = ({ input, label, type, meta: { touched, error } }) => (


  <div className="form-group">
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      <div className={ touched && error  ? 'alert alert-danger' : ''} > {touched && error && <span>{error}</span>} </div>
    </div>
  </div>
);




const SubmitValidationForm = props => {
 

  const { error, handleSubmit, pristine, reset, submitting } = props;
 
   

 

  return (


    <div className="card">
  <div className="card-header">Header</div>
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <Field
        name="attendee"
        type="text"
        component={renderField}
        label="Attendee Name"
      />
        <Field
        name="family"
        type="text"
        component={renderField}
        label="Bride or Groom Side"
      />
        <Field
        name="contact"
        type="text"
        component={renderField}
        label="Email Address"
      />

      {error && <strong>{error}</strong>}


      <div className='row'>
        <button type="submit" className='col-md-2 btn btn-primary' disabled={submitting}>Submit</button>
        <button type="button" className='col-md-2 btn btn-warning' disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
     </div> 
  <div className="card-footer">Footer</div>
</div>
  );
};

export default reduxForm({
  form: 'submitValidation', // a unique identifier for this form
})(SubmitValidationForm);
