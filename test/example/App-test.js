import test from 'tape';
import App from '../../src/example/App';


test('App', t => {
  t.ok(App instanceof Function, 'should be function');
  t.end();
});
