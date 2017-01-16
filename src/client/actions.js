export const REQUEST_FORECAST = 'REQUEST_FORECAST';
export function requestForecast() {
  return {
    type: REQUEST_FORECAST,
  };
}

export const RECEIVE_FORECAST = 'RECEIVE_FORECAST';
export function receiveForecast(json) {
  return {
    type: RECEIVE_FORECAST,
    forecast: json,
  };
}

export function fetchForecast() {
  return (dispatch) => {
    dispatch(requestForecast());

    return window.fetch('http://api.openweathermap.org/data/2.5/forecast?q=Belfast,uk&mode=json&appid=9ef33d97507fd25be6f8aac5fc41f5b0')
      .then(res => res.json())
      .then(json => dispatch(receiveForecast(json)));
  };
}
