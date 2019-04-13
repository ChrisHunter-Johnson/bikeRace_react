import React, { Component, Fragment } from 'react';
//import { render } from 'react-dom';
import axios from 'axios';
import Map from '../components/map'
import cycle from './cycling.png';
import  InfoWindow  from '../components/infoWindow'
import { render } from 'react-dom';
//import {Panel} from 'primereact/panel';


//import Rider from './rider.js';


class RiderMap extends Component{
 constructor(props) {
   super(props);
   this.state = {
    riderList: []
    };

   this.createInfoWindow = this.createInfoWindow.bind(this);
 }

 createInfoWindow(e, map) {
    const infoWindow = new window.google.maps.InfoWindow({
        content: '<div id="infoWindow" />',
        position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    })
    infoWindow.addListener('domready', e => {
      render(<InfoWindow />, document.getElementById('infoWindow'))
    })
    infoWindow.open(map)
  }




  renderBikers(map){
   axios.get('http://localhost:3001/api/v1/riders.json').then(
    response => {
     console.log(response)
     this.setState({
      riderList: response.data
     })

   for(let i = 0; i < this.state.riderList.length; i++ ){
    let rider = this.state.riderList[i];
    console.log(rider.lastName + ' lat '+rider.lat+' lng '+rider.lng);

      new window.google.maps.Marker({
     position: { lat: parseFloat(rider.lat), lng: parseFloat(rider.lng) },
     map: map,
     icon: cycle,
     title: rider.firstName+' '+rider.lastName
   });
  }

 }).catch(error => console.log(error))
  }
 render(){

  return (
<Fragment>



   <Map
        id="myMap"
        options={{
          center: { lat: 40.0000, lng: -105.3500 },
          zoom: 12
        }}
     onMapLoad={map => {this.renderBikers(map) }}
   />


 </Fragment>

  );
}
}

export default RiderMap
