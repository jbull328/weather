import axios from 'axios';

const API_KEY = '751585cfb1e0a5d18a456412864efee0';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?q=appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);


  return {
    type: FETCH_WEATHER,
    payload: request
  };
}