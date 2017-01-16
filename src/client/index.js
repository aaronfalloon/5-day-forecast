import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { fetchForecast } from './actions';

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware),
);

store.dispatch(fetchForecast());
