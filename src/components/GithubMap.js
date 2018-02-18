import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ country }) => (<Marker country={country} />);

class GithubMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      map: null,
      center: {
        lat: 1.278184,
        lng: 103.848075
      },
      zoom: 0
    }
  }

  componentWillReceiveProps({selectedCountry}) {
    if (this.props.selectedCountry !== selectedCountry) {
      if (this.state.map) {
        const service = new window.google.maps.places.PlacesService(this.state.map);
        service.textSearch({
          query: selectedCountry
        }, (result, status) => {
          const location = result[0].geometry.location;
          this.setState({
            center: {
              lat: location.lat(),
              lng: location.lng()
            }
          })
        });
      }
    }
  }

  render() {
    return (
      <div style={{...this.props.style}} className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCUabf-YDUsAB9Tpc09pxZ2odk9LrA0IQ8'
          }}
          onGoogleApiLoaded={({map, maps}) => {
            this.setState({map: map})
          }}
          defaultCenter={ this.state.center }
          center={this.state.center}
          defaultZoom={ this.state.zoom } >
          <AnyReactComponent
            lat={ this.state.center.lat }
            lng={ this.state.center.lng }
            country={ this.props.selectedCountry } />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GithubMap;
