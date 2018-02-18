import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ country }) => (<Marker country={country} />);

class GithubMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      center: {
        lat: 1.278184,
        lng: 103.848075
      },
      zoom: 0
    }
  }

  render() {
    return (
      <div style={{...this.props.style}} className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCUabf-YDUsAB9Tpc09pxZ2odk9LrA0IQ8'
          }}
          defaultCenter={ this.state.center }
          defaultZoom={ this.state.zoom } >
          <AnyReactComponent
            lat={ 1.278184 }
            lng={ 103.848075 }
            country={ this.props.selectedCountry } />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GithubMap;
