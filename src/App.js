import React, { Component } from 'react';
import './App.css';
import { countries } from './utils/countries.json';

// import components
import Map from './components/Map';
import Control from './components/Control';

class App extends Component {
  render() {
    return (
      <div className="columns">
        <div className="column is-one-third is-left">
          <Control countries={countries} />
        </div>
        <div className="column">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
