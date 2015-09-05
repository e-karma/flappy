import Ember from "ember";

export default Ember.ObjectController.extend({
  prototypePage: function(){
    var model = this.get('model');
    if (model){
      var page = {
        themeName: this.get('parentController.name'),
        sections: JSON.parse(JSON.stringify(model.sections))
      };
      return page;
    }
    return null;
  }.property('model', 'parentController.name')
});
