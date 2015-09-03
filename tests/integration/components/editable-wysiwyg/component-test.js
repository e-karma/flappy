import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('editable-wysiwyg', 'Integration | Component | editable wysiwyg', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{editable-wysiwyg}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#editable-wysiwyg}}
      template block text
    {{/editable-wysiwyg}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
