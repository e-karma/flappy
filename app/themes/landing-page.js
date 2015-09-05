import Ember from 'ember';

export default Ember.Object.extend({

  displayName: 'Landing Page',

  styles: {
    darkColor: '#000',
    lightColor: '#FFF',
    midColor: '#F8F8F8'
  },

  sections: "hero two-column-left-image two-column-right-image banner".w(),

  defaultSectionData: {
    hero: {
      headline: "The Headline",
      subheadline: "The secondary headline"
    },
    'two-column-left-image': {
      headline: 'The left side',
      text: 'This is some lorem ipsum hipster bacon fixy artisanal.',
      imageSrc: 'http://placehold.it/250x200&text=Left+Image',
    },
    'two-column-right-image': {
      headline: 'The right side',
      text: 'This is some lorem ipsum hipster bacon fixy artisanal.',
      imageSrc: 'http://placehold.it/250x200&text=Right+Image',
    },
    banner: {
      text: 'Default Banner Text',
      button1: 'Button 1',
      button2: 'Button 2',
      button3: 'button 3'
    }
  },

  pages: [
    { displayName: 'Landing',
      thumbnailUrl: 'http://placehold.it/200&text=Landing+Page',
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
    }
  ],

  // Should be part of a base class?
  /*
  thumbnailUrl: function(){
    return '/images/theme-thumbnails/'+this.get('name')+'/theme.png';
  }.property('name')
  */
 thumbnailUrl: 'http://placehold.it/200&text=Landing+Page+Theme'

});
