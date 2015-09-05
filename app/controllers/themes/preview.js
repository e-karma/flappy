import Ember from "ember";

export default Ember.Controller.extend({

  previewPage: function(){
    var defaultSectionData = this.get('model.defaultSectionData'),
        page = {themeName: this.get('model.name')};
    page.sections = this.get('model.sections').map(function(sectionName){
      return {
        templateName: sectionName,
        data: defaultSectionData[sectionName]
      };
    });

    return page;
  }.property('sections.[]', 'defaultSectionData', 'name')

});
