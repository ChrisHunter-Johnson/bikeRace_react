import React, {Component} from 'react';
import axios from 'axios';
//import {GMap} from 'primereact/gmap';
import {GoogleMapReact} from 'google-map-react';
//import {PropTypes} from 'prop-types';
//import styled from 'styled-components';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export class RiderLocation extends Component {
 constructor(props) {
        super(props);
        this.state = {lists: [] };
    }
  componentDidMount(){
   axios.get('http://localhost:3001/api/v1/riders').then(
    response => {
     console.log(response)
     this.setState({
      lists: response.data
     })
    }
   ).catch(error => console.log(error))

  }
  static defaultProps = {
    center: {lat: 40.00, lng: 105.27},
    zoom: 11
  };


 render (){
  return (
   <div>

   {this.state.lists.map((rider) => {
    return(
     <div key={rider.id} >
      <p>{rider.firstName} </p>
      <p>{rider.lastName} </p>
      <p>{rider.originCity} </p>
      <p>{rider.originState} </p>
      <p>{rider.locText} </p>
      <p>{rider.lat} </p>
      <p>{rider.lng} </p>

     </div>
    )
   }
   )}


   </div>


  );
 }
