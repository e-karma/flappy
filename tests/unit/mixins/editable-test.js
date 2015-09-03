import Ember from 'ember';
import EditableMixin from '../../../mixins/editable';
import { module, test } from 'qunit';

module('Unit | Mixin | editable');

// Replace this with your real tests.
test('it works', function(assert) {
  var EditableObject = Ember.Object.extend(EditableMixin);
  var subject = EditableObject.create();
  assert.ok(subject);
});
