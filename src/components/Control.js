import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <div>
        <div className="control has-icons-left">
          <div className="select is-medium">
            <select>
              <option>Select countries</option>
              {this.props.countries.map((country) => {
                return (
                  <option key={country.code}>{country.name}</option>
                )
              })}
            </select>
          </div>
          <span className="icon is-medium is-left">
            <i className="fas fa-globe"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default Control;
