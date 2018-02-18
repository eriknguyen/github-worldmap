import React, { Component } from 'react';
import './App.css';

// import list of countries
// can use this instead: https://restcountries.eu/rest/v2/all?fields=name;altSpellings
import store from './data/store';

// import components
import GithubMap from './components/GithubMap';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
      selectedCountry: null
    };
    this.resizeMap = this.resizeMap.bind(this);
  }

  resizeMap() {
    this.setState({
      width: window.innerWidth, 
      height: window.innerHeight - 52
    });
  }

  componentWillMount() {
    this.resizeMap();
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeMap);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resizeMap);
  }

  onSelectChange(selectedCountry) {
    this.setState({
      selectedCountry
    });
  }
  
  render() {
    return (
      <div>
        <Control countries={store.getCountries()} onCountrySelectChange={this.onSelectChange.bind(this)} />
        <GithubMap 
          style={{width: this.state.width + 'px', height: this.state.height + 'px'}}
          selectedCountry={this.state.selectedCountry} />
      </div>
    );
  }
}

export default App;
