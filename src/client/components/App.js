/**
 * Responsible for passing the forecast data to the Forecast component
 */
import { connect } from 'react-redux';
import Forecast from './Forecast';

export default connect(
  state => ({
    forecast: state,
  }),
)(Forecast);
