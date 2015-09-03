import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(theme, options){
  var container = options.data.view.container;
  var styles = container.lookup(
    'template:themes/' + theme.name + '/styles' );
  if (!styles) {
    styles = container.lookup(
      'template:themes/default/styles' );
  }
  var ViewClass = Ember.View.extend({
    template: styles,
    context: theme.styles,

    changeStyles: function(){
      this.rerender();
    }.observes('context.lightColor',
               'context.midColor',
               'context.darkColor')
  });
  return Ember.Handlebars.helpers.view.call(this, ViewClass, options);
});
