import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import api from '../utils/api';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

class GithubMap extends Component {
  static defaultProps = {
    center: {
      lat: 1.278184,
      lng: 103.848075
    },
    zoom: 0
  }

  render() {
    const country = this.props.selectedCountry;
    return (
      <div style={{...this.props.style}} className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCUabf-YDUsAB9Tpc09pxZ2odk9LrA0IQ8'
          }}
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom } >
          <AnyReactComponent
            lat={ 1.278184 }
            lng={ 103.848075 }
            text={ country } />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GithubMap;
