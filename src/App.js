import React, { Component } from 'react';
//import { Growl } from 'primereact/components/growl/Growl';
import { connect } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
//import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navigation from "./components/navigation";
//import Footer from "./container/footer";
import './css/main.css';
library.add( fab);


class App extends Component {
 componentWillReceiveProps(nextProps) {
    if (nextProps.growlmessages.messages) {
      if (nextProps.growlmessages.messages.length > 0) {
        this.growl.show(nextProps.growlmessages.messages);
      }
    }
  }
  render() {
    return (
     <div className="container-fluid App">
        <Navigation />


        <div className="App-content">
        {this.props.children}
        </div>
      </div>
    );
  }


}
const mapStateToProps = (state) => (
  { growlmessages: state.growlmessages }
)
App = connect(mapStateToProps)(App)


export default App;
