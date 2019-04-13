import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route } from 'react-router';
import {FlickrImg} from './container/flickrImg.js';
import { Rider } from './container/rider.js';

import { RiderLocation } from './container/riderLocation.js';
import { Slogan } from './container/slogan.js';
import {Home } from './container/home.js';
import createBrowserHistory from 'history/createBrowserHistory';
import appReducers from './reducers/reducers_all.js'
import './index.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import * as serviceWorker from './serviceWorker';

let History = createBrowserHistory();
let store = createStore(appReducers);

require('dotenv').config()
//ReactDOM.render(<App />, document.getElementById('root'));
//here we create store by passing all combined reducers
const render = () =>
  ReactDOM.render(
    <Provider store={store}>
      <Router history={History}>
        <App>
          
          <Route path="/" exact component={Home} />
          <Route path="/flickrImg" component={FlickrImg} />
          <Route path="/rider" component={Rider} />
          <Route path="/riderMap" component={RiderLocation} />
          <Route path="/slogan" component={Slogan} />

        </App>


      </Router>
    </Provider>,
    document.getElementById('root')
  );
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
