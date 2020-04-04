import React, { Component } from "react";

import "./Event.styles.css";

class Event extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    };
  }
  handleShowDetails = (details) => {
    if (details) {
      this.setState({ showDetails: false });
    } else {
      this.setState({ showDetails: true });
    }
  };

  render() {
    const { showDetails } = this.state;
    const { event } = this.props;
    return (
      <div className="event">
        <h3 className="event_name">{event.name}</h3>
        <div className="event_date">
          {event.local_time} - {event.local_date}
        </div>
        <button
          className="event_button"
          onClick={() => this.handleShowDetails(showDetails)}
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        {showDetails && (
          <div className="event_details">
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: event.description }}
            />
            <p className="visibility">{event.visibility}</p>
            <a className="link" href={event.link}>
              Event Link
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Event;
