import React, { Component } from "react";

import("./Event.styles.css");

class Event extends Component {
  constructor() {
    super();
    this.state = {
      event: {},
      showDetails: false,
    };
  }
  handleShowDetails = () => {
    this.setState({ showDetails: true });
  };

  render() {
    const { event, showDetails } = this.state;
    return (
      <div className="event">
        <h3 className="event_name">{event.name}</h3>
        <div className="event_date">Date: {event.local_date}</div>
        <button
          className="event_button"
          onClick={() => this.handleShowDetails()}
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        {showDetails && (
          <div className="event_details">
            <div className="event_status">Description: {event.description}</div>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
