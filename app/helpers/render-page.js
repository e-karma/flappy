import Ember from 'ember';
import {lookupThemeLayout} from '../themes/index';

var RenderPageHelper = Ember.Handlebars.makeBoundHelper(function(page, theme, options){
  var container = options.data.view.container;
  var layout = lookupThemeLayout(container, page.themeName);
  var ViewClass = Ember.View.extend({
    layout: layout,
    templateName: 'editor/page',
    context: page,
    theme: theme
  });
  return Ember.Handlebars.helpers.view.call(this, ViewClass, options);
});

export default RenderPageHelper;
