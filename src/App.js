import React, { Component } from "react";
import "./App.css";
import EventList from "./components/Event/EventList.component";
import CitySearch from "./components/CitySearch/CitySearch.component";
import NumberOfEvents from "./components/Event/NumberOfEvents.component";

class App extends Component {
  render() {
    return (
      <div className="app">
        <CitySearch />
        <EventList />
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
