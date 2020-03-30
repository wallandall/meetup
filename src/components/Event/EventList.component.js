import React, { Component } from "react";

import Event from "./Event.component";

class EventList extends Component {
  constructor() {
    super();

    this.state = {
      events: [],
    };
  }
  render() {
    const { events } = this.state;
    return (
      <ul className="event-list">
        {this.state.events.map(event => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
