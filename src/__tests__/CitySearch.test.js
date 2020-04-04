import React from "react";
import { shallow } from "enzyme";
import CitySearch from "../components/CitySearch/CitySearch.component";

import { mockSuggestions } from "../mock-data/mock-suggestions";

describe("<CitySearch/> component", () => {
  let CitySearchWrapper;
  beforeAll(() => {
    CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} />);
  });
  test("render text input", () => {
    expect(CitySearchWrapper.find(".city")).toHaveLength(1);
  });
  test("render list of suggestions", () => {
    expect(CitySearchWrapper.find(".suggestions")).toHaveLength(1);
  });

  test("render text input correctly", () => {
    const query = CitySearchWrapper.state("query");
    expect(CitySearchWrapper.find(".city").prop("value")).toBe(query);
  });
  test("change state when text input changes", () => {
    const eventObject = { target: { value: "Berlin" } };
    CitySearchWrapper.find(".city").simulate("change", eventObject);
    expect(CitySearchWrapper.state("query")).toBe("Berlin");
  });
  test("render list of suggestions correctly", () => {
    const suggestions = CitySearchWrapper.state("suggestions");
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(
      suggestions.length
    );
    for (let i = 0; i < suggestions.length; i += 1) {
      expect(CitySearchWrapper.find(".suggestions li").at(i).text()).toBe(
        suggestions[i].name_string
      );
    }
  });

  test("click on suggestion would change query state and empty the list of suggetstions", () => {
    CitySearchWrapper.setState({
      mockSuggestions,
    });
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(2);
    CitySearchWrapper.find(".suggestions li").at(0).simulate("click");
    expect(CitySearchWrapper.state("query")).toBe("Munich, Germany");
    expect(CitySearchWrapper.find(".suggestions li")).toHaveLength(0);
  });
});

//Integration Tests
describe("<CitySearch /> integration", () => {
  test("get a list of cities when user searches for Munich", async () => {
    const CitySearchWrapper = shallow(<CitySearch updateEvents={() => {}} />);
    CitySearchWrapper.find(".city").simulate("change", {
      target: { value: "Munich" },
    });
    await CitySearchWrapper.update();
    expect(CitySearchWrapper.state("suggestions")).toEqual(mockSuggestions);
  });
});
