import test from 'tape';
import Component from '../src/Component';

test('Component', t => {
  t.ok(Component instanceof Function, 'should be function');
  t.end();
});
