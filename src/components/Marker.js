import React, { Component } from 'react';
import axios from 'axios';

const CLIENT_ID = '26a9fb6a926836bc77b7';
const CLIENT_SECRET = 'db08c23916375e6782dee0e189ed026628d53d39';

const API_PARAMS = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
const ROOT_URL = 'https://api.github.com';

class Marker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      totalCount: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.country && nextProps.country !== this.props.country) {
      axios.get(`${ROOT_URL}/search/users?q=+location:${nextProps.country}&sort=followers&per_page=10`)
        .then(resp => {
          this.setState({
            users: resp.data.items,
            totalCount: resp.data.total_count
          })
        })
        .catch(error => console.log(error));
    }
  }

  render() {
    if (this.props.country) {
      return (
        <div>{this.props.country}: {this.state.totalCount}</div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default Marker;
