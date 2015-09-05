import Ember from 'ember';

export default Ember.Object.extend({

  displayName: 'Start-Up.Solutions',

  styles: {
    darkColor: '#002d68',
    lightColor: '#8bc6ff',
    midColor: '#3f7ab5'
  },

  sections: "hero single-column-text two-column three-column four-column footer".w(),

  defaultSectionData: {
    hero: {text: 'new HERO'},
    footer: {text: 'new footer'},
    'single-column-text': {text: 'new single column'}
  },

  pages: [
    { displayName: 'Hero',
      thumbnailUrl: '/images/theme-thumbnails/sus/',
      sections: [{
        templateName: 'hero',
        data: {
          text: 'Default Hero Text'
        }
      }]
    },
    { displayName: 'Resume',
      thumbnailUrl: '/images/theme-thumbnails/sus/',
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
 thumbnailUrl: '/images/theme-thumbnails/'

});
