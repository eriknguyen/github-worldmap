import React, { Component } from 'react';

class Control extends Component {
  
  onSelectChange(event) {
    if (event.target.value !== 'Select countries') {
      const selectedCountry = event.target.value;
      this.props.onCountrySelectChange(selectedCountry);
    }
  }

  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <div className="navbar-item" style={{'width': '100%'}}>
            <div className="field" style={{'width': '100%'}}>
              <div className="control has-icons-left">
                <div className="select is-primary">
                  <select onChange={this.onSelectChange.bind(this)}>
                    <option>Select countries</option>
                    {this.props.countries.map((country) => {
                      return (
                        <option key={country} value={country}>{country}</option>
                      );
                    })}
                  </select>
                </div>
                <span className="icon is-left">
                  <i className="fas fa-globe"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Control;
