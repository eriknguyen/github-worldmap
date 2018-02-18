import React, { Component } from 'react';
import axios from 'axios';
import store from '../data/store';
import flatten from '../utils/flatten';

const CLIENT_ID = '26a9fb6a926836bc77b7';
const CLIENT_SECRET = 'db08c23916375e6782dee0e189ed026628d53d39';

const API_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
const GITHUB_URL = 'https://api.github.com';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      totalCount: 0
    };
  }

  /**
   * Take a country name and return all the possible name of that countries.
   * 3 steps: flatten the countryInfo object -> convert into non-duplicate array of name -> join a string of params for location
   * 
   * @param {string} country 
   */
  createLocationParams(country) {
    const countryInfo = flatten(store.getCountry(country));
    let allLocations = [...new Set(Object.keys(countryInfo).map((k) => countryInfo[k]))];
    return allLocations.map(loc => `location:"${loc}"`).join('+');
  }

  /**
   * Check when this Marker getting new props and new country is selected then fetch data from Github API and update the state
   * 
   * @param {*} nextProps 
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.country && nextProps.country !== this.props.country) {
      const locationParams = this.createLocationParams(nextProps.country);
      axios.get(`${GITHUB_URL}/search/users?${API_PARAMS}&q=${locationParams}&sort=followers&per_page=10`)
        .then(resp => {
          this.setState({
            users: resp.data.items,
            totalCount: resp.data.total_count
          });
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    const MARKER_SIZE = 40;
    const markerStyle = {
      position: 'relative',
      width: MARKER_SIZE,
      height: MARKER_SIZE,
      left: -MARKER_SIZE / 2,
      top: -MARKER_SIZE / 2,
      background: '#fff',
      borderRadius: '50%',
      border: '4px solid orange'
    };
    if (this.props.country) {
      return (
        <div style={markerStyle}>
          {this.props.clicked && (
            <div className="marker-details">
              <div className="marker-details__title">{this.props.country}</div>
              <div className="marker-details__subtitle">Users count: {this.state.totalCount}</div>
              <div className="marker-details__content">
                Most followed users:
                <ul className="avatar-list">
                  {this.state.users.map(user => {
                    return (
                      <li key={user.id} className="avatar">
                        <a href={user.html_url} target="_blank">
                          <img src={user.avatar_url} alt={user.login}/>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default Marker;
