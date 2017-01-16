import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import forecast from '../../src/client/reducers'
import successResponse from './doubles/success-response.json';
import { RECEIVE_FORECAST } from '../../src/client/actions';

const expect = chai.expect;

chai.use(sinonChai);

suite('reducers', function() {
  setup(function() {
    this.sb = sinon.sandbox.create();
  });

  teardown(function() {
    this.sb.restore();
  });

  suite('forecast()', function() {
    test('defaults the state to an empty object', function() {
      expect(forecast({}, {})).to.deep.equal({});
    });

    test('returns the forecast from a RECEIVE_FORECAST action', function() {
      expect(forecast({}, {
        type: RECEIVE_FORECAST,
        forecast: successResponse,
      })).to.deep.equal(successResponse);
    });
  });
});
