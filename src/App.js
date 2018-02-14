import React, { Component } from 'react';
import './App.css';
import { countries } from './utils/countries.json';

// import components
import GithubMap from './components/GithubMap';
import Control from './components/Control';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      height: '600px'
    }
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
      window.addEventListener("resize", this.resizeMap);
  }

  componentWillUnmount() {
      window.removeEventListener("resize", this.resizeMap);
  }
  
  render() {
    return (
      <div>
        <Control countries={countries} />
        <GithubMap style={{width: this.state.width + 'px', height: this.state.height + 'px'}}/>
      </div>
    );
  }
}

export default App;
