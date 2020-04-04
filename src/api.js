import { mockEvents } from "./mock-data/mock-events";
import { mockSuggestions } from "./mock-data/mock-suggestions";

async function getSuggestions(query) {
  return mockSuggestions;
}

async function getEvents(lat, lon) {
  return mockEvents.events;
}

export { getSuggestions, getEvents };
