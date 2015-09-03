import Ember from 'ember';
import EditableMixin from './mixins/editable';

export default Ember.Component.extend(EditableMixin, {
  actions: {
    pickSuccess: function(imageData){
      var doneLoading = Ember.run.bind(this, this._doneLoading);
      this.$('img.section-image').one('load', doneLoading);

      this.setProperties({
        src:    imageData.url,
        loadingImage: true,
        width:  imageData.width,
        height: imageData.height
      });

      this.send('finishEditing');
    }
  },

  _doneLoading: function(){
    this.set('loadingImage', false);
  }
});
