import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | registrar_persona', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:registrar-persona');
    assert.ok(route);
  });
});
