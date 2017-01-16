import React from 'react';
import _ from 'lodash';

export default (props) => {
  if (!_.isArray(props.forecast.list)) {
    return (
      <div />
    );
  }

  return (
    <div>
      <h1>Forecast for {props.forecast.city.name}</h1>
      <ul>
        {
          props.forecast.list.map((recording) => {
            return (
              <li>
                <h2>{recording.dt_txt}</h2>
                <ul>
                  <li>{recording.weather[0].description}</li>
                  <li>Temperature {recording.main.temp}</li>
                </ul>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
