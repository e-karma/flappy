import Ember from 'ember';
import EditableMixin from './mixins/editable';
import SaveOnBlurMixin from './mixins/save-on-blur';

export default Ember.Component.extend(EditableMixin, SaveOnBlurMixin, {

  actions: {
    save: function(html){
      this.set('text', html);
      this.send('finishEditing');
    }
  }
});
