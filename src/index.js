import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import * as serviceWorker from './serviceWorker';

import './index.css';
import store from './store';
// import App from './App';
import AllTripsList from './components/all-trips-list';
import NewTrip from './components/new-trip';
import InfoModal from './components/info-modal'


// ReactDOM.render(<AllTripsList trips = {[
//   {
//     user: 'tom',
//     selectedOptions: ['skiing', 'breweries'],
//     duration: 9
//   },

//   {
//     user: 'frank',
//     selectedOptions: ['beaches'],
//     duration: 9
//   },
  
//   {
//     user: 'tom',
//     selectedOptions: ['city'],
//     duration: 9
//   }
// ]} />, document.getElementById('root'));
// console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <InfoModal />
    <NewTrip />
    <AllTripsList />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
