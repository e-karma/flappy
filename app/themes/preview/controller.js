import Ember from "ember";

export default Ember.ObjectController.extend({

  previewPage: function(){
    var defaultSectionData = this.get('defaultSectionData'),
        page = {themeName: this.get('name')};
    page.sections = this.get('sections').map(function(sectionName){
      return {
        templateName: sectionName,
        data: defaultSectionData[sectionName]
      };
    });

    return page;
  }.property('sections.[]', 'defaultSectionData', 'name')

});
