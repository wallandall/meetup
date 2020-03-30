import React from "react";
import { shallow } from "enzyme";

import App from "../App";
import EventList from "../components/Event/EventList.component";
import CitySearch from "../components/CitySearch/CitySearch.component";
import Event from "../components/Event/Event.component";
import NumberOfEvents from "../components/Event/NumberOfEvents.component";

describe("<App /> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });
  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});
