import Ember from 'ember';
import SaveOnBlurMixin from '../../../mixins/save-on-blur';
import { module, test } from 'qunit';

module('Unit | Mixin | save on blur');

// Replace this with your real tests.
test('it works', function(assert) {
  var SaveOnBlurObject = Ember.Object.extend(SaveOnBlurMixin);
  var subject = SaveOnBlurObject.create();
  assert.ok(subject);
});
