import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    toggle: function(toggleable){
      var propName = Ember.String.camelize('expand-'+toggleable);
      this.toggleProperty(propName);
    }
  }
});
