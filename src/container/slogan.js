import React, {Component,Fragment} from 'react';

import { Form } from "react-final-form";
import { Field } from 'react-final-form-html5-validation';
import Styles from "./FormStyles";
import Axios  from 'axios';
import {Dialog} from 'primereact/dialog';


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
 // window.alert(JSON.stringify(values, 0, 2));
  Axios({
   method: 'post',
   url: 'http://localhost:3001/api/v1/slogans.json',
   data: { "slogan": {
    "email": values.email,
    "name": values.firstName,
    "lastName": values.lastName,
    "suggestion": values.suggest
   }

  }
 }).then(function (response){
  let resp = response.status;
  if(resp !== 201){
   window.alert("Your slogan entry could not be saved. Please retry later.");
  }




 }).catch(function(error){
  console.log("Error from post:  "+error);
  window.alert("YOur slogan entry could not be saved. Please retry later.");
 })

};

export class Slogan extends Component {
 constructor() {
        super();
        this.state = {visible: false};
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
    }
    onClick(event) {
         this.setState({visible: true});
     }

     onHide(event) {
         this.setState({visible: false});
     }

 render(){
   return (
    <Fragment>
    <Dialog header="Your Slogan!" visible={this.state.visible} style={{width: '25vw'}}  onHide={this.onHide} maximizable>
                        Thanks for your slogan entry! :) We will review all entries and get back to you if you are the winner. All the best luck!!!
                    </Dialog>

     <div className="card slogan-card">
      <div className="body">
       <div className=" card-header text-center">Tell us your slogan suggestion!! </div>
        <Styles>
         <Form
         onSubmit={onSubmit}
          render={({handleSubmit, reset, submitting, pristine, values}) => (
           <form
             onSubmit={event => {
               handleSubmit(event).then(() => {
                 this.setState({visible: true});
                 reset()
               }).catch(() => {
                console.log("error from submit");
               })
             }} >
            <Field name="firstName" component="input" type="text" placeholder="First Name"
             pattern="[A-Z].+"
             patternMismatch="Capitalize your First Name"
             required
             valueMissing="First Name is required" >
             {({input, meta: {error, touched}, ...rest } ) => (
              <div>
               <label>First Name</label>
               <input {...input} {...rest} />
               {error && touched && <span>{error}</span>}
              </div>
              )
             }
            </Field>
            <Field name="lastName" component="input" type="text" placeholder="Last Name"
             pattern="[A-Z].+"
             patternMismatch="Capitalize your Last Name"
             required
             valueMissing="Last Name is required" >
             {({input, meta: {error, touched}, ...rest  }) => (
               <div>
                <label>Last Name</label>
                <input {...input} {...rest} />
                {error && touched && <span>{error}</span>}
               </div>
             )}
            </Field>
            <Field name="email" component="input" type="email"  typeMismatch="That's not an email address"
              placeholder="Email" required
              valueMissing="Email address is required" >
              {({input, meta: {error, touched}, ...rest  }) => (
                <div>
                 <label>Email</label>
                 <input {...input} {...rest} />
                 {error && touched && <span>{error}</span>}
                </div>
              )}
            </Field>
            <Field name="suggest" component="textarea" maxLength="50" placeholder="Your Slogan "
             required >
             {({input, meta: {error, touched}, ...rest  }) => (
               <div>
                <label>Your Slogan</label>
                <input {...input} {...rest} />
                {error && touched && <span>{error}</span>}
               </div>
             )}
            </Field>
            <div className="buttons">
             <button type="submit" disabled={submitting}>
              Send your slogan
             </button>
             <button
              type="button"
              onClick={reset}
              disabled={submitting || pristine}
             >
              Reset
            </button>
            </div>
           </form>
          )}
         />
       </Styles>
      </div>
     </div>

    </Fragment>
   );
 }
}
