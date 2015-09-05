import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('editor', {path: 'editor/:page_id'});
  this.resource('themes', function(){
    this.route('preview', {path: 'preview/:themeName'});
  });
  this.resource('pages', function(){
    this.route('new', {path: 'new/:themeName'});
  });

	this.route('buttons_and_icons');
	this.route('calendar');
	this.route('cms');
	this.route('blog');
	this.route('closed_navigation');
	this.route('dashboard');
	this.route('email');
	this.route('err404');
	this.route('faq');
	this.route('filetrees');
	this.route('fileupload');
	this.route('form_components');
	this.route('form_styles');
	this.route('gallery');
	this.route('mainnav');
	this.route('marketing');
	this.route('manage');
	this.route('gallery');
	this.route('header');
	this.route('layouts');
	this.route('marketplace');
	this.route('mainnav');
	this.route('search_results');
	this.route('sign_in');
	this.route('sign_up');
	this.route('timeline');
	this.route('ui_elements');
	this.route('user_profile');
	this.route('validations');
	this.route('widgets');
  	this.route('wizard');
	this.route('wysiwyg');
});

export default Router;
