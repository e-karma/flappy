import Ember from 'ember';
import SectionBaseView from '../views/section-base';
import {lookupSectionTemplate} from '../themes/index';


var RenderSectionHelper = Ember.Handlebars.makeBoundHelper(function(themeName, section, options){
  var container = options.data.view.container;
  var themeSectionTemplate = lookupSectionTemplate(container, themeName, section);

  var ViewClass = SectionBaseView.extend({
    layoutName: 'editor/section',
    template: themeSectionTemplate,
    context: section.data,
    section: section,
  });

  return Ember.Handlebars.helpers.view.call(this, ViewClass, options);
});

export default RenderSectionHelper;
