import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event/Event.component";
import { mockEvent } from "../mock-data/mock-event";

describe("<Event/>componet", () => {
  let EventWrapper;

  const events = mockEvent;

  beforeAll(() => {
    EventWrapper = shallow(<Event event={events} />);
  });

  test("event container exists", () => {
    expect(EventWrapper.find(".event")).toHaveLength(1);
  });

  test("default state is collaped", () => {
    expect(EventWrapper.state("showDetails")).toBe(false);
  });
  test("event button exists", () => {
    expect(EventWrapper.find(".event_button")).toHaveLength(1);
  });

  test("event onclick changes state", () => {
    EventWrapper.find(".event_button").simulate("click");
    expect(EventWrapper.state("showDetails")).toBe(true);
  });

  test("expect event name is set", () => {
    EventWrapper.setState({
      event: events,
    });
    expect(EventWrapper.state("event").name).toBe(
      "Drupal User Group Munich @EineWeltHaus"
    );
    expect(EventWrapper.find(".event_date").text()).toBe("19:00 - 2020-04-15");
  });
});
