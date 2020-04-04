import React, { Component } from "react";
import "./App.css";
import EventList from "./components/Event/EventList.component";
import CitySearch from "./components/CitySearch/CitySearch.component";
import NumberOfEvents from "./components/Event/NumberOfEvents.component";

import { getEvents } from "./api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      lat: null,
      lon: null,
      page: null,
    };
  }

  // componentDidMount() {
  //   this.updateEvents();
  // }

  updateEvents = (lat, lon) => {
    getEvents(lat, lon).then((events) => this.setState({ events }));
  };

  render() {
    return (
      <div className="app">
        <CitySearch updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
