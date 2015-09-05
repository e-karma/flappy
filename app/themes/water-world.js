import Ember from 'ember';

export default Ember.Object.extend({

  displayName: 'Water World',

  styles: {
    darkColor: '#002d68',
    lightColor: '#8bc6ff',
    midColor: '#6E8AE6'
  },

  sections: "hero two-column-text footer image".w(),

  defaultSectionData: {
    hero: {text: 'new WET HERO'},
    footer: {text: 'new WET footer'},
    header: {text: 'new WET header'},
    'two-column-text': {
      column1: 'Put some column in here',
      column2: 'And a little column in here' },
    image: {
      src: 'http://upload.wikimedia.org/wikipedia/en/5/5f/Waterworld.jpg',
      height: 100,
      width: 100 }
  },

  pages: [
    { displayName: 'Kevin Costner Fanpage',
      thumbnailUrl: '/images/theme-thumbnails/yankees/hero.png',
      sections: [{
        templateName: 'hero',
        data: {
          text: 'I just love you Kevin Costner'
        }
      }]
    },
    { displayName: 'Water Fan',
      thumbnailUrl: '/images/theme-thumbnails/yankees/resume.png',
      sections: [{
        templateName: 'two-column-text',
        data: {
          column1: 'Water is blue, so great.',
          column2: 'Water is so wet, so sweet'
        }
      },{
        templateName: 'image',
        data: {
          src: 'http://www.personal.psu.edu/users/s/m/sms5488/yankeessign.jpg',
          height: 100,
          width: 100
        }
      },{
        templateName: 'footer',
        data: {
          text: 'Default Footer Text'
        }
      }]
    }
  ],

  thumbnailUrl: "http://www.examiner.com/images/blog/replicate/EXID44562/images/kevin_costner_water_world.jpg"

});
