import React, { Component } from "react";

import { getSuggestions } from "../../api";

import "./CitySearch.styles.css";

class CitySearch extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      suggestions: [],
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ query: value });
    getSuggestions(value).then((suggestions) => this.setState({ suggestions }));
  };

  handleItemClicked = (value, lat, lon) => {
    this.setState({ query: value, suggestions: [] });
    this.props.updateEvents(lat, lon);
  };

  render() {
    const { query, suggestions } = this.state;
    return (
      <div className="city_search">
        <input
          type="text"
          className="city"
          value={query}
          placeholder="City Search"
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {suggestions.map((item) => (
            <li
              key={item.name_string}
              onClick={() =>
                this.handleItemClicked(item.name_string, item.lat, item.lon)
              }
            >
              {item.name_string}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CitySearch;
