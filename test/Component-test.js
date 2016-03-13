import test from 'tape';
import ReactComponentTemplate from '../src/Component';


test('ReactComponentTemplate', t => {
  t.ok(ReactComponentTemplate instanceof Function, 'should be function');
  t.end();
});
