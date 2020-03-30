import React from "react";
import { shallow } from "enzyme";

import NumberOfEvents from "../components/Event/NumberOfEvents.component";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents />);
  });

  test("default NumberOfEvents must be 32", () => {
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(32);
  });

  test("number of events container exists", () => {
    expect(NumberOfEventsWrapper.find(".number_of_events")).toHaveLength(1);
  });

  test("expect state to change new number numberOfEventd is entered", () => {
    const eventObject = { target: { value: 18 } };
    NumberOfEventsWrapper.find(".number_of_events__input").simulate(
      "change",
      eventObject
    );
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toBe(18);
  });
});
