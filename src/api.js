import axios from "axios";

import { mockEvents } from "./mock-data/mock-events";
import { mockSuggestions } from "./mock-data/mock-suggestions";

async function getSuggestions(query) {
  if (window.location.href.startsWith("http://localhost")) {
    return mockSuggestions;
  }

  const token = await getAccessToken();
  if (token) {
    const url =
      "https://api.meetup.com/find/locations?&sign=true&photo-host=public&query=" +
      query +
      "&access_token=" +
      token;
    const result = await axios.get(url);
    return result.data;
  }
  return [];
}

async function getEvents(lat, lon, page) {
  if (window.location.href.startsWith("http://localhost")) {
    return mockEvents.events;
  }

  const token = await getAccessToken();
  if (token) {
    let url =
      "https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public" +
      "&access_token=" +
      token;

    if (lat && lon) {
      url += "&lat=" + lat + "&lon=" + lon;
    }

    const result = await axios.get(url);
    return result.data.events;
  }
}

async function getAccessToken() {
  const accessToken = localStorage.getItem("access_token");

  if (!accessToken) {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    if (!code) {
      window.location.href =
        "https://secure.meetup.com/oauth2/authorize?client_id=t7sbb2kbtfidgfjeujrbmo04da&response_type=code&redirect_uri=https://wallandall.github.io/meetup";
      return null;
    }
    return getOrRenewAccessToken("get", code);
  }
  const lastSavedTime = localStorage.getItem("last_saved_time");
  if (accessToken && Date.now() - lastSavedTime < 3600000) {
    return accessToken;
  }
  const refreshToken = localStorage.getItem("refresh_token");
  return getOrRenewAccessToken("renew", refreshToken);
}

async function getOrRenewAccessToken(type, key) {
  let url;
  if (type === "get") {
    // Lambda endpoint to get token by code
    url =
      "https://heu277i7s1.execute-api.eu-central-1.amazonaws.com/dev/api/token/" +
      key;
  } else if (type === "renew") {
    // Lambda endpoint to get token by refresh_token
    url =
      "https://heu277i7s1.execute-api.eu-central-1.amazonaws.com/dev/api/token/" +
      key;
  }

  // Use axios to do GET request to the endpoint
  const tokenInfo = await axios.get(url);
  // Save tokens to localStorage together with a timestamp
  localStorage.setItem("access_token", tokenInfo.data.access_token);
  localStorage.setItem("refresh_token", tokenInfo.data.refresh_token);
  localStorage.setItem("last_saved_time", Date.now());
  // Return the access_token
  return tokenInfo.data.access_token;
}

export { getSuggestions, getEvents, getAccessToken };
