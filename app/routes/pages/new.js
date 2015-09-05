import Ember from "ember";
import {lookupTheme} from '../../themes/index';

export default Ember.Route.extend({
  model: function(params){
    return lookupTheme(this.container, params.themeName);
  },

  serialize: function(model){
    return {themeName: model.get('name')};
  },

  actions: {
    didTransition: function(){
      var applicationController = this.controllerFor('application');
      applicationController.set('breadcrumbs', [
        {path: 'themes.index'},
        {path: this.routeName, model: this.currentModel}
      ]);
    }
  }
});
