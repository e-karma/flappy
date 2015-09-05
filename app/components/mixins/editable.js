import Ember from 'ember';

export default Ember.Mixin.create({
  classNames: ['flappy-editable'],

  click: function(){
    this.send('startEditing');
  },

  actions: {
    startEditing: function(){
      this.set('isEditing', true);
    },
    finishEditing: function(){
      this.set('isEditing', false);
    }
  }
});
