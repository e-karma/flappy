import Ember from 'ember';

export default Ember.Mixin.create({

  toggleBlurListener: function(){
    if (this.get('isEditing')){
      this.startBlurListener();
    } else {
      this.stopBlurListener();
    }
  }.observes('isEditing').on('didInsertElement'),

  startBlurListener: function(){
    var view = this;
    Ember.$(document.body).on('click.'+this.get('elementId'), function(e){
      if (!Ember.$.contains(view.get('element'), e.target)) {
        view.send('finishEditing');
      }
    });
  },

  stopBlurListener: function(){
    Ember.$(document.body).off('click.'+this.get('elementId'));
  }.on('willDestroyElement')

});
