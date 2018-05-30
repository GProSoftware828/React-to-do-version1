import React, { Component } from 'react';
import logo from '../src/img_avatar1.png';




export default class reviewComponent extends Component {



constructor(props) {
     super(props);

     this.user = JSON.parse(localStorage.getItem('user'));

     this.attendee ='';

     if(this.user !=null){

     	 

     	 this.attendee =this.user.attendee;

     	 localStorage.removeItem('user');

     	 this.display='block';

     
     }else{
             
              this.attendee ='Anonymous';
              this.display='none';

     }

    


   
  }    




    render() {
        return (
            <div style={{marginTop: 50 ,display: this.display}}>
               
             
			<div className="card" style={{width: 400}}>
			  <img className="card-img-top" src={logo} alt="Card "/>
			  <div className="card-body">
			    <h4 className="card-title">Thanks {this.attendee}</h4>
			    <p   className="card-text"> Thanks For Submission ! </p>
			  
			  </div>
			</div>
		 
             </div>
        )
    }
}