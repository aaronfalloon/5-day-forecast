import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import rootReducer from './reducers';
import { fetchForecast } from './actions';
import App from './components/App';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(fetchForecast());
