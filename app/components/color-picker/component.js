import Ember from 'ember';

export default Ember.Component.extend({
  setupMiniColors: function(){
    var changeColor = Ember.run.bind(this, this._changeColor);

    this.$().minicolors({
      defaultValue: this.get('color'),
      change: changeColor
    });
  }.on('didInsertElement'),

  _changeColor: function(hex){
    Ember.run.debounce(this, 'set', 'color', hex, 150);
  }
});
