import React, {Component, Fragment} from 'react';
import Axios from 'axios';
import RiderMap from './riderMap.js';




export class RiderLocation extends Component{
 constructor(props) {
  super(props);
  this.state = {riderPlaces: [] };
 }
 componentDidMount(){
  Axios.get('http://localhost:3001/api/v1/riders.json').then(
   response => {
    this.setState({
     riderPlaces: response.data

   })
   console.log("riderPlaces");
   console.log(this.state.riderPlaces);
   this.riderData = response.data;
  // console.log("riderData");
  // console.log(this.riderData);
   }
  ).catch(error => {
     console.log("Error");
      console.log(error);
    }
   )
 }
 render(){


  return (
   <Fragment>
    <RiderMap riderPlaces={this.state.riderPlaces} />
   
   </Fragment>


  );
 }

}
