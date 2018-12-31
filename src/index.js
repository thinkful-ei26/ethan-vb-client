import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import AllTripsList from './components/all-trips-list';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AllTripsList trips = {[
  {
    user: 'tom',
    selectedOptions: ['skiing', 'breweries'],
    duration: 9
  },

  {
    user: 'frank',
    selectedOptions: ['beaches'],
    duration: 9
  },
  
  {
    user: 'tom',
    selectedOptions: ['city'],
    duration: 9
  }
]} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
