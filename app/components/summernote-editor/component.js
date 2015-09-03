import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',

  toolbarOptions: [
    ['style', ['bold', 'italic', 'underline', 'clear']],
    ['fontsize', ['fontsize']],
    ['color', ['color']],
    ['para', ['ul', 'ol', 'paragraph']],
    ['height', ['height']],
  ],

  setupEditor: function(){
    this.$().html(this.get('text'));
    this.summernote = this.$().summernote({
      toolbar: this.get('toolbarOptions'),
      focus:   true
    });
  }.on('didInsertElement'),

  teardownEditor: function(){
    var html = this.summernote.code();
    this.summernote.destroy();
    this.sendAction('action', html);
  }.on('willDestroyElement')

});
