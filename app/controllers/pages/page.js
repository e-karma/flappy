import Ember from "ember";

export default Ember.Controller.extend({
  prototypePage: function(){
    var model = this.get('model');
    if (model){
      var page = {
        themeName: this.get('model.parentController.name'),
        sections: JSON.parse(JSON.stringify(model.sections))
      };
      return page;
    }
    return null;
  }.property('model', 'model.parentController.name')
});
