import Ember from "ember";

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['crumb:has-progressed:disabled'],
  router: function(){ return this.container.lookup('router:main'); }.property(),

  crumb: function(){
    var route = this.get('route');
    return this.get('breadcrumbs').find(function(crumb){
      return crumb.path === route;
    });
  }.property('breadcrumbs.[]', 'route'),

  click: function(e){
    e.preventDefault();
    var crumb = this.get('crumb');

    if (!crumb) { return; } // disallow skipping ahead

    var model = Ember.get(crumb, 'model'),
        options = [Ember.get(crumb, 'path')],
        router = this.get('router');
    if (model) {
      options.push(model);
    }
    router.transitionTo.apply(router, options);
  }

});
