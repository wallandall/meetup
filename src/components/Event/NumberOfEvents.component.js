import React, { Component } from "react";
class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      numberOfEvents: 32,
    };
  }
  handleInputChanged = event => {
    const value = event.target.value;
    this.setState({ numberOfEvents: value });
  };
  render() {
    const { numberOfEvents } = this.state;
    return (
      <div className="number_of_events">
        <h3>Number of Events</h3>
        <input
          type="text"
          className="number_of_events__input"
          value={numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
