import chai from 'chai';
import jsdomGlobal from 'jsdom-global';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import { requestForecast, receiveForecast, fetchForecast, REQUEST_FORECAST,
  RECEIVE_FORECAST } from '../../src/client/actions';
import successResponse from './doubles/success-response.json';
import fetch from './doubles/fetch';

const expect = chai.expect;

chai.use(sinonChai);

suite('actions', function() {
  setup(function() {
    this.sb = sinon.sandbox.create();
    this.jsdom = jsdomGlobal();
    window.fetch = fetch();
    this.dispatch = this.sb.stub();
  });

  teardown(function() {
    this.sb.restore();
    this.jsdom();
  });

  suite('requestForecast()', function() {
    test('returns a REQUEST_FORECAST action', function() {
      expect(requestForecast().type).to.equal(REQUEST_FORECAST);
    });
  });

  suite('receiveForecast()', function() {
    test('returns a RECEIVE_FORECAST action', function() {
      expect(receiveForecast().type).to.equal(RECEIVE_FORECAST);
    });

    test('includes any passed JSON as the forecast', function() {
      const action = receiveForecast(successResponse);

      expect(action.forecast).to.equal(successResponse);
    });
  });

  suite('fetchForecast()', function() {
    test('dispatches a REQUEST_FORECAST action', function() {
      fetchForecast()(this.dispatch);

      expect(this.dispatch.withArgs(requestForecast())).to.be.calledOnce;
    });

    test('dispatches a REQUEST_FORECAST action before fetching the 5-day forecast', function() {
      fetchForecast()(this.dispatch);

      expect(this.dispatch.withArgs(requestForecast())).to.be.calledBefore(window.fetch);
    });

    test('fetches the 5-day forecast for Belfast', function() {
      fetchForecast()(this.dispatch);

      expect(window.fetch.withArgs('http://api.openweathermap.org/data/2.5/forecast?q=Belfast,uk&mode=json&appid=9ef33d97507fd25be6f8aac5fc41f5b0')).to.be.calledOnce;
    });

    test('returns the Promise from fetch()', function() {
      expect(fetchForecast()(this.dispatch)).to.be.instanceOf(Promise);
    });

    test('converts the response to JSON and dispatches a RECEIVE_FORECAST action with it', function() {
      const fetchingForecast = fetchForecast()(this.dispatch);

      return fetchingForecast
        .then(() => {
          expect(this.dispatch.withArgs({
            type: RECEIVE_FORECAST,
            forecast: successResponse,
          })).to.be.calledOnce;
        })
        .catch((err) => {
          throw err;
        });
    });
  });
});
