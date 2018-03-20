import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | listar_personas', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:listar-personas');
    assert.ok(route);
  });
});
