import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event/Event.component";

describe("<Event/>componet", () => {
  let EventWrapper;

  const events = {
    id: 18975323,
    name: "HannoverJS",
    local_date: "2020-05-26",
    description:
      '<p>Hannovers monthly JavaScript Meetup.</p> <p>Awesome talks, cool drinks and delicious pizza will be awaiting you!</p> <p>Checkout our website for the talks and more info: hannoverjs.de (<a href="http://hannoverjs.de/" class="linkified">http://hannoverjs.de/</a>)</p> <p>---</p> <p>Frequently Asked Questions</p> <p>Q: Is this meetup in English?<br/>A: No. This meetup is primarily in German, but if we have Non-German speaking attendees, we try to switch to English.</p> <p>Q: Is this meetup free?<br/>A: Yes. The location, drinks and food are sponsored by NewStore (<a href="http://www.newstore.com/" class="linkified">http://www.newstore.com/</a>). But if we see someone abusing this meetup and has no interest in the talks or in participating, we reserve the right to exclude persons.</p>',
  };

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
    expect(EventWrapper.state("event").name).toBe("HannoverJS");
    expect(EventWrapper.find(".event_date").text()).toBe("Date: 2020-05-26");
  });
});
