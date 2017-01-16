import React from 'react';
import _ from 'lodash';

export default (props) => {
  if (!_.isObject(props.forecast.list)) {
    return (
      <div />
    );
  }

  return (
    <div>
      <h1>Forecast for {props.forecast.city.name}</h1>
      <ul>
        {
          _.map(props.forecast.list, ((predictions, date) =>
            <li className="day">
              <h2>{date}</h2>
              <ul>
                {
                  _.map(predictions, prediction =>
                    <li className="prediction">
                      <h3>{prediction.dt_txt.substr(10)}</h3>
                      <p>{prediction.weather[0].description}</p>
                      <p>Temperature {prediction.main.temp}k</p>
                    </li>,
                  )
                }
              </ul>
            </li>
          ))
        }
      </ul>
    </div>
  );
};
