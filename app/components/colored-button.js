import Ember from 'ember';

function addPrefix(property) {
  return property ? 'btn-' + property : null;
}

export default Ember.Component.extend({

  tagName: 'input',
  classNames: ['btn'],
  classNameBindings: ['buttonStyleClass', 'buttonSizeClass', 'isDisabled:disabled', 'isBlock:btn-block'],
  attributeBindings: ['value', 'style', 'type'],
  value: null,
  style: "margin-bottom:5px;",
  type: 'button',
  buttonStyle: null,
  buttonSize: null,
  isDisabled: null,
  isBlock: null,
  buttonStyleClass: function() {
    return addPrefix(this.get('buttonStyle'));
  }.property('buttonStyle'),
  buttonSizeClass: function() {
    return addPrefix(this.get('buttonSize'));
  }.property('buttonSizeClass'),

  click: function() {
    this.sendAction();
  }


});
