# **Introduction**

This is a simple form for guests of a wedding to put in their attendance upon arrival. However, there are several problems with hosting that have not been resolved and therefore it has also not been stylized yet. React is unresponsive to hosting, and yarn does not work on my machine (already have npm installed and this app does not respond to npm).

The usu. React README literature has been removed, because the troubleshooting suggestions it provides for this application DO NOT work.

## React app for scaffolding/local hosting assistance:

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Hosting

Meant to work with yarn commands in terminal, but does not respond.

Built on a machine with npm prior installed.

Any suggestions for troubleshooting are appreciated.

## Simple Form For Wedding Attendance:

```javascript
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
```