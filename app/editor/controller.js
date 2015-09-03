import Ember from 'ember';

import {lookupTheme} from '../themes/index';

export default Ember.ObjectController.extend({
  theme: function(){
    return lookupTheme(this.container, this.get('themeName'));
  }.property('themeName'),

  filteredSectionTypes: function(){
    var searchQuery = this.get('searchQuery');
    if (!searchQuery) { return []; }
    searchQuery = searchQuery.toLowerCase();

    return this.get('theme.sections').filter(function(item){
      return item.toLowerCase().indexOf(searchQuery) > -1;
    });
  }.property('theme.sections','searchQuery'),

  actions: {
    dragSectionStart: function(section){
      this.set('draggingSection', section);
      var index = this.get('sections').indexOf(section);
      this.set('removeAtIndex', index);
    },
    dragOverSection: function(section){
      var index = this.get('sections').indexOf(section);
      this.set('insertAtIndex', index);
    },
    dropSection: function(){
      var draggingSection = this.get('draggingSection'),
          insertAtIndex = this.get('insertAtIndex'),
          removeAtIndex = this.get('removeAtIndex');

      this.send('resetDrag');

      if (insertAtIndex === null || removeAtIndex === null) { return; }
      if (!draggingSection) { return; }

      this.get('sections').removeAt(removeAtIndex);
      this.get('sections').insertAt(insertAtIndex, draggingSection);
    },
    resetDrag: function(){
      this.setProperties({
        draggingSection: null,
        insertAtIndex: null,
        removeAtIndex: null
      });
    },
    removeSection: function(section){
      this.get('sections').removeObject(section);
    },
    addSection: function(sectionName){
      var theme = this.get('theme');
      var sectionObject = {
        templateName: sectionName,
        data: Ember.$.extend({}, theme.defaultSectionData[sectionName]) // clone the default data
      };
      this.get('sections').pushObject(sectionObject);
    }
  }
});
