import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['alert', 'alert-info', 'alert-dimissable'],
  isVisible: true,

  actions: {
    dismiss: function(){
      this.set('isVisible', false);
    }
  }

});
