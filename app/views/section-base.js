import Ember from 'ember';

export default Ember.View.extend({
  classNameBindings: [':flappy-section', 'hover'],
  attributeBindings: ['draggable'],

  draggable: 'true',

  dragStart: function(){
    this.get('controller').send(
      'dragSectionStart', this.get('section'));
  },

  dragOver: function(e){
    // must prevent default in dragOver in order for 'drop'
    // event to happen.
    // See https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations#drop
    e.preventDefault();
    this.get('controller').send(
      'dragOverSection', this.get('section'));
  },

  dragEnd: function(){
    this.get('controller').send('resetDrag');
  },

  drop: function(e){
    e.preventDefault();
    this.get('controller').send('dropSection');
  },

  mouseEnter: function(){
    this.set('hover', true);
  },
  mouseLeave: function(){
    this.set('hover', false);
  }
});
