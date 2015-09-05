/*global filepicker, flappyENV*/
import Ember from 'ember';

var get = Ember.get;

export default Ember.Component.extend({
  setKey: function(){
    var key = get(flappyENV, 'FILE_PICKER.KEY');
    if (!key) {
      throw new Error('filepicker-io could not find FILE_PICKER.KEY configuration');
    }

    if (!filepicker) {
      throw new Error('filepicker-io could not find filepicker global');
    }

    filepicker.setKey(key);
  }.on('didInsertElement'),

  actions: {
    pick: function(){
      var env = get(flappyENV, 'FILE_PICKER'),
          pickerOptions = get(env, 'PICKER_OPTIONS') || {},
          storeOptions  = get(env, 'STORE_OPTIONS') || {};

      var onSuccess = Ember.run.bind(this, this._pickSuccess);
      var onFailure = Ember.run.bind(this, this._pickFailure);

      filepicker.pickAndStore(pickerOptions, storeOptions,
                              onSuccess, onFailure);
    }
  },

  // each inkBlob contains url, filename, mimetype, size
  // See https://developers.inkfilepicker.com/docs/web/#javascript
  _pickSuccess: function(inkBlobs){
    var inkBlob = Ember.Array.detect(inkBlobs) ? inkBlobs[0] : inkBlobs;

    var component = this;
    filepicker.stat(inkBlob, {width:true, height:true}, function(metadata){
      var imageObj = {
        url:inkBlob.url,
        width: metadata.width,
        height: metadata.height
      };
      Ember.run(component, 'sendAction', 'pickSuccess', imageObj);
    });
  },

  _pickFailure: function(error){
    /* Error is probably just that the user closed the file picker. */
    console.log('filepicker-io errored: ',error);
  }
});
