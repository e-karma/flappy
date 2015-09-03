import Ember from 'ember';

export default Ember.Object.extend({

  displayName: 'Yankees Theme 3k',

  styles: {
    darkColor: '#002d68',
    lightColor: '#8bc6ff',
    midColor: '#3f7ab5'
  },

  sections: "hero single-column-text footer image".w(),

  defaultSectionData: {
    hero: {text: 'new HERO'},
    footer: {text: 'new footer'},
    'single-column-text': {text: 'new single column'},
    image: {
      src: 'http://b-i.forbesimg.com/mikeozanian/files/2013/05/300px-NewYorkYankees_caplogo.svg_1.png',
      height: 100,
      width: 100 }
  },

  pages: [
    { displayName: 'Hero',
      thumbnailUrl: '/images/theme-thumbnails/yankees/hero.png',
      sections: [{
        templateName: 'hero',
        data: {
          text: 'Default Hero Text'
        }
      }]
    },
    { displayName: 'Resume',
      thumbnailUrl: '/images/theme-thumbnails/yankees/resume.png',
      sections: [{
        templateName: 'single-column-text',
        data: {
          text: 'Default Single Column Text'
        }
      },{
        templateName: 'footer',
        data: {
          text: 'Default Footer Text'
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
 thumbnailUrl: "http://math.hws.edu/~cc5148/The%20Yankees/nyy-pin-logo.gif"

});
