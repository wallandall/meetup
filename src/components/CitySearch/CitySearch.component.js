import React, { Component } from "react";

class CitySearch extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
      suggestions: [],
    };
  }

  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ query: value });
  };

  handleItemClicked = value => {
    this.setState({ query: value });
  };

  render() {
    const { query, suggestions } = this.state;
    return (
      <div className="city_search">
        <input
          type="text"
          className="city"
          value={query}
          onChange={this.handleInputChanged}
        />
        <ul className="suggestions">
          {suggestions.map(item => (
            <li
              key={item.name_string}
              onClick={() => this.handleItemClicked(item.name_string)}
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
