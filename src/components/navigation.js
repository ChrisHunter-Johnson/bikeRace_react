import React, { Component }  from 'react';
import {Menubar} from 'primereact/components/menubar/Menubar';
import {connect} from 'react-redux';
import { withRouter } from 'react-router'

//import { showGrowl } from '../action/action.js';
//import { showInfoMessage } from '../utils/utils.js';


class Navigation extends Component {
 navigateToPage = (path) => {
		console.log('Navigate to path ' + path);
		this.props.history.push(path);

	}
 render() {
  var items=[
     {label: 'Home', command:()=>{this.navigateToPage( '/')}},
     {label: 'Riders',command:()=>{this.navigateToPage( '/rider')}},
     {label: 'Images',command:()=>{this.navigateToPage('/flickrImg')}},
     {label: 'Map',command:()=>{ this.navigateToPage('/riderMap')}},
     {label: 'Competion',command:()=>{this.navigateToPage( '/slogan')}}

];
return (<Menubar model={items}/>);
}
}
const mapDispatchToProps = {
  //showGrowl
};
Navigation = withRouter(connect(null,mapDispatchToProps)(Navigation))

export default Navigation
