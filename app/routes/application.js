import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    willTransition: function(){
      var applicationController = this.controllerFor('application');
      applicationController.set('breadcrumbs', []);
    }
  }
});
