import React, {Component, Fragment} from 'react';
import Axios from 'axios';
import {DataView} from 'primereact/dataview';
import {Panel} from 'primereact/panel';
import '../css/main.css';

export class Rider extends Component {
 constructor(props) {
   super(props);
   this.state = {
    riders: [],
    layout: 'grid',
    sortKey: null,
    sortOrder: null
    };
   this.itemTemplate = this.itemTemplate.bind(this);
   this.onSortChange = this.onSortChange.bind(this)
 }

 componentDidMount(){
  Axios.get('http://localhost:3001/api/v1/riders.json').then(
   response => {
    this.setState({
     riders: response.data

   })
   console.log("riderPlaces");
   console.log(this.state.riders );
   this.riders  = response.data;
  // console.log("riderData");
  // console.log(this.riderData);
   }
  ).catch(error => {
     console.log("Error");
      console.log(error);
    }
   )
 }

 onSortChange(event){
  const value = event.value;
  if (value.indexOf('!') === 0) {
   this.setState({
    sortOrder: -1,
    sortField: value.substring(1, value.length),
    sortKey: value
   });
  }else{
   this.setState({
    sortOrder: 1,
    sortField: value,

   });
  }
 }

 renderListItem(rider) {
  return(
   <div className="p-col-12 rider-grid-details" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
    <div className="p-grid">
     <div className="p-col-12 p-md-8 rider-data">
      <div>First name: <b>{rider.firstName}</b></div>
      <div>Last name: <b>{rider.lastName}</b></div>
      <div>Home City: <b>{rider.originCity}</b></div>
      <div>Home State: <b>{rider.originState}</b></div>
     </div>
    </div>
   </div>
  );
 }

 renderGridItem(rider){
  return (
   <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
    <Panel header={[rider.firstName,' ', rider.lastName] }  style={{ textAlign: 'center' }}>
     <div className="rider-detail">Home city: <b>{rider.originCity}</b>  Home State: <b>{rider.originState}</b></div>
     <div className="rider-detail">Riding bio -- Started riding Jan 1st 2001....</div>
    </Panel>
   </div>
  );
 }

 itemTemplate(rider, layout){
  if(!rider){
   return;
  }
  return this.renderGridItem(rider);
 }

 renderHeader(){
  return(
   <div className="p-grid">
    <div className="p-col-12 " >
    <h1>This years riders!!</h1>
    </div>
   </div>
  );
 }



 render(){
  const header = this.renderHeader();
  return (
   <Fragment>
    <div className="rider-dataview">
     <DataView value={this.state.riders} layout={'grid'} header={header}
      itemTemplate={this.itemTemplate} paginatorPosition={'both'} paginator={true} rows={10} />
     </div>
   </Fragment>
  );
 }
}
