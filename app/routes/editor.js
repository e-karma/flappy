import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return {
      themeName: 'landing-page',
      sections: [{
        templateName: 'hero',
        data: {
          headline: 'Landing Page',
          subheadline: 'Think of What You Could Build'
        }
      },{
        templateName: 'two-column-right-image',
        data: {
          headline: 'Death to the Stock Photo: Special Thanks',
          text: 'A special thanks to Death to the Stock Photo for providing the photographs that you see in this template. Visit their website to become a member.',
          imageSrc: 'http://start-up.solutions/assets/preview/covers/mountainbeach-b442006bbceeaf8311ebfec1ca3c10fd.jpeg'
        }
      },{
        templateName: 'two-column-left-image',
        data: {
          headline: '3D Device Mockups by PSDCovers',
          text: 'Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by PSDCovers! Visit their website to download some of their awesome, free photoshop actions!',
          imageSrc: 'http://start-up.solutions/assets/preview/covers/photographer-5f03f0ca1b3a79606d8a7b1408106ef9.jpeg'
        }
      },{
        templateName: 'two-column-right-image',
        data: {
          headline: 'Google Web Fonts and Font Awesome Icons',
          text: 'This template features the \'Lato\' font, part of the Google Web Font library, as well as icons from Font Awesome.',
          imageSrc: 'http://start-up.solutions/assets/preview/covers/a-7e332024bf3e1b5b7f2ab64065fe0448.jpeg'
        }
      },{
        templateName: 'banner',
        data: {
          text: 'Connect to Start Bootstrap',
          button1: 'Twitter',
          button2: 'FaceBook',
          button3: 'LinkedIn'
        }
      }]
    };
  },
  setupController: function(controller, model){
    var clonedModel = JSON.parse(JSON.stringify(model));
    this._super(controller, clonedModel);
  },
  actions: {
    didTransition: function(){
      var applicationController = this.controllerFor('application');
      applicationController.set('breadcrumbs', [
        {path: 'themes.index'},
        {path: 'pages.new', model: Ember.get(this.currentModel, 'themeName')},
        {path: this.routeName, model: this.currentModel}
      ]);
    }
  }
});
