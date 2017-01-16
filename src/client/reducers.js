export default function forecast(state = {}, action) {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return action.forecast;
    default:
      return state;
  }
}
