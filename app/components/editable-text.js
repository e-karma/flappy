import Ember from 'ember';
import EditableMixin from './mixins/editable';
import SaveOnBlurMixin from './mixins/save-on-blur';

export default Ember.Component.extend(EditableMixin, SaveOnBlurMixin, {

  focusOnInput: function(){
    var view = this;
    if (this.get('isEditing')) {
      Ember.run.schedule('afterRender', function(){
        var field = view.$('input');
        field.focus();
      });
    }
  }.observes('isEditing')

});
