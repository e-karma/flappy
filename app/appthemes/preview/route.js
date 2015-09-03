import Ember from 'ember';
import {lookupTheme} from '../../themes/index';

export default Ember.Route.extend({
  model: function(params){
    return lookupTheme(this.container, params.themeName);
  }
});
