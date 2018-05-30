import React, { Component } from 'react';

//import showResults from "./showResults";

import SubmitValidationForm from "./SubmitValidationForm";

import { Redirect } from 'react-router-dom';

import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));


export default class CreateComponent extends Component {

  state = {
    redirectToNewPage: false
  }

constructor(props) {
     super(props);
     this.handleSubmit = this.handleSubmit.bind(this);
   
  }    




  handleSubmit(values) {
    //e.preventDefault();
    //console.log(e);

    // this.setState({ redirectToNewPage: true })

 

      return sleep(1000).then(() => { // simulate server latency
   

    if (values.attendee === '' || values.attendee ===undefined ) {
      throw new SubmissionError({
        attendee: 'Attendee Required !',
        _error: 'Submission failed!',
      });
    } 

    else if (values.family ==='' || values.family ===undefined  ) {
      throw new SubmissionError({
        family: 'Family Required !',
        _error: 'Submission failed!',
      });
    } 

 

    else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.contact) === false || values.contact ==='' || values.contact  ===undefined ) {
      throw new SubmissionError({
        contact: 'Contact Required !',
        _error: 'Submission failed!',
      });
    } 
    else {
     // window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);

      console.log(JSON.stringify(values, null, 2));

      if(values.attendee!== undefined && values.family !== undefined &&  values.contact !== undefined ){
 

        localStorage.setItem('user', JSON.stringify(values, null, 2));

      	this.setState({ redirectToNewPage: true })
      }

    }
  });


  }

    render() {

		 if (this.state.redirectToNewPage) {
		     return (
		     <Redirect to="/review"/>
		     )
		   }

        return (
            <div style={{marginTop: 50}}>
              

                 <SubmitValidationForm  onSubmit= {this.handleSubmit } />

            </div>
        )
    }
}