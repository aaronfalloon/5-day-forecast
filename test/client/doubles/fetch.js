import sinon from 'sinon';
import successResponse from './success-response.json';

/**
 * Returns a stub Response object for the Fetch API
 *
 * @returns {Object}
 */
function response() {
  return {
    json() {
      return new Promise((resolve) => {
        resolve(successResponse);
      });
    },
  };
}

/**
 * fetch() stub
 */
function fetch() {
  return new Promise((resolve) => {
    resolve(response());
  });
}

export default function() {
  // Make sure the spy is fresh every time
  return sinon.spy(fetch);
}
