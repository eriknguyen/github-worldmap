import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
    return (
      <div style={{...this.props.style}} className="google-map">
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom } >
          <AnyReactComponent
            lat={ 1.278184 }
            lng={ 103.848075 }
            text={ "Where's Waldo?" } />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GithubMap;
