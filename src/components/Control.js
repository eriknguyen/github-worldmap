import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
        <nav className="navbar">
          <div className="navbar-brand">
            <div className="navbar-item" style={{'width': '100%'}}>
                <div className="field" style={{'width': '100%'}}>
                  <div className="control has-icons-left">
                    <div className="select is-primary">
                      <select>
                        <option>Select countries</option>
                        {this.props.countries.map((country) => {
                          return (
                            <option key={country.code}>{country.name}</option>
                          )
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
