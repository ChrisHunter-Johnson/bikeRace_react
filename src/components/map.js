import React, { Component } from 'react';

//import { render } from 'react-dom';

class Map extends Component {
  constructor(props) {
    super(props);
    this.onScriptLoad = this.onScriptLoad.bind(this)
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);
    this.props.onMapLoad(map)
  }

  componentDidMount() {

    if (!window.google) {
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = 'https://maps.google.com/maps/api/js?key='+process.env.REACT_APP_GOOGLE_MAP_API_KEY;
      //s.src = 'https://maps.google.com/maps/api/js?key=AIzaSyA5O8hO639iU0j9c1YSCg4Ys0Qv9o18j9c';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }
  }

  render() {
    return (

      <div className="map-div" style={{
      height: '90vh' }} id={this.props.id} />
    );
  }
}

export default Map
