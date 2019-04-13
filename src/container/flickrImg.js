import React, {Component, Fragment} from 'react';
import Axios  from 'axios';

import {Paginator} from 'primereact/paginator';
import { Lightbox }  from 'primereact/lightbox';





import '../css/main.css';


export class FlickrImg extends Component {
 constructor(props){
  super(props);
  this.state ={
   images: [],
   //currentPageImages: [],
  // selectedImg: '',
   first: 0,
   rows: 40,
   rowPerPage: 40,
   lightboxSet: [],
   lightboxIsOpen: false,
   numImages: 0
  };
  this.onPageChange = this.onPageChange.bind(this);
  this.onBuildLightset = this.onBuildLightset.bind(this);


 }



 componentDidMount(){
  var _this = this; // private reference to this
  Axios
  .get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key='+process.env.REACT_APP_FLICKR_API+'&format=json&nojsoncallback=1&per_page=200&tags=bikerace, BoulderBikeTour&content_type=1&max_upload_date=2019-03-28 23:59:33&min_upload_date=2017-03-28 00:00:00&extras=url_z,url_t,description')
  .then(function(result){
     let l_set = result.data.photos.photo.slice(0,40);
     console.log("lset "+l_set);
     console.log("total num "+result.data.photos.photo.length);
     _this.onBuildLightset(l_set);
    _this.setState({
      items: result.data.photos.photo,
 //     selectedImage: _this.imageURL(result.data.photos.photo[0]),
 //     currentPageImages: result.data.photos.photo.slice(0,10),
      numImages: result.data.photos.photo.length

    })



  })
 }



// imageURL(item ){
//  return 'http://farm' + item.farm + '.staticflickr.com/' + item.server + '/' + item.id + '_' + item.secret + '.jpg'
// }

 //selectImage(selectedImage) {
 //       this.setState({
 //           selectedImage
//        })
//}

onPageChange(event) {

 this.setState({
  first: event.first,
  rows: event.rows


 });
 console.log("onPageChange new Page number "+event.page);
 console.log("index of first  "+event.first);


 console.log("index of rows  "+event.rows);
 let final = event.first + event.rows;
 console.log("index of end  "+final);
 let l_set = this.state.items.slice(event.first,final);
 this.onBuildLightset(l_set);
}

onBuildLightset(items){
 let l_pics = [];
 for(var i = 0; i < items.length; i++){
  //flrkrImg = null;
  let flrkrImg = {
   source: '',
   thumbnail: '',
   title: ''
  }
  flrkrImg.source = items[i].url_z;
  flrkrImg.thumbnail = items[i].url_t;
  flrkrImg.title = items[i].title;
  l_pics.push(flrkrImg);

  //console.log("title: "+items[i].title+ " description : "+items[i].description._content+" description full: "+JSON.stringify(items[i].description));
  //pics.push(flrkrImg);
  //console.log("l_pics "+i+" source: "+l_pics[i].src);
 }
 this.setState({
  lightboxSet: l_pics
 })
}






 render(){



  return(
    <Fragment>
    <Paginator first={this.state.first} rows={this.state.rows} totalRecords={this.state.numImages}
    onPageChange={this.onPageChange}
    template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"/>
     <div className="p-justify-center">
    <Lightbox type="images" images={this.state.lightboxSet} class="p-lightbox-main"   />
     </div>

   </Fragment>
  )
 }
}
