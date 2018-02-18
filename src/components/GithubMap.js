import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AnyReactComponent = ({ country, clicked }) => (<Marker country={country} clicked={clicked} />);

class GithubMap extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      map: null,
      center: {
        lat: 1.278184,
        lng: 103.848075
      },
      zoom: 0,
      clicked: false
    };
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
          });
        });
      }
    }
  }

  onMarkerClick(key, childProps) {
    console.log('key: ', key);
    console.log('childProps: ', childProps);
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    return (
      <div style={{...this.props.style}} className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyCUabf-YDUsAB9Tpc09pxZ2odk9LrA0IQ8'
          }}
          onGoogleApiLoaded={({map}) => {
            this.setState({map});
          }}
          center={this.state.center}
          defaultZoom={this.state.zoom}
          onChildClick={this.onMarkerClick.bind(this)} >
          <AnyReactComponent
            lat={this.state.center.lat}
            lng={this.state.center.lng}
            country={this.props.selectedCountry}
            clicked={this.state.clicked} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GithubMap;
