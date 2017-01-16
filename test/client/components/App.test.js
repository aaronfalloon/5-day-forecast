import chai from 'chai';
import jsdomGlobal from 'jsdom-global';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import App from '../../../src/client/components/App';

const expect = chai.expect;

chai.use(sinonChai);

suite('App', function() {
  setup(function() {
    this.sb = sinon.sandbox.create();
    this.jsdom = jsdomGlobal();
  });

  teardown(function() {
    this.sb.restore();
    this.jsdom();
  });

  test('', function() {
  });
});
