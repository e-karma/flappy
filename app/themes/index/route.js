import Ember from 'ember';
import {themeNames, lookupThemes} from '../../appthemes/index/route';

export default Ember.Route.extend({
  model: function(){
    return lookupThemes(this.container, themeNames);
  },
  actions: {
    didTransition: function(){
      var applicationController = this.controllerFor('application');
      applicationController.set('breadcrumbs', [
        {path: this.routeName}
      ]);
    }
  }
});
