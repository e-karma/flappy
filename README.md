### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit the running app at [http://localhost:4200](http://localhost:4200).
* For more information on using ember-cli, visit [http://iamstef.net/ember-cli/](http://iamstef.net/ember-cli/).

### Deployment

First, you must setup for deployment:

* Get added to the application on Google App Engine
* Accept the invitation via email
* Install the App Engine SDK via [google.com](https://developers.google.com/appengine/downloads#Google_App_Engine_SDK_for_Python) or `brew install google-app-engine`

To deploy the app, simply run:

* `./deploy.sh`

This is a wrapper around `ember build --environment production && appcfg.py update .`

You may want to preview your changes to the `app.yaml` file locally. To do this run the productoin asset build, then run `dev_appserver.py ./`

### Authoring Themes

Themes have four essentials parts:

* Manifest file
* Theme templates
* Thumbanail assets
* Theme assets

In addition to requiring these files, a theme **must have an entry in the `themeNames` variable exported from `app/themes/index.js`**. Adding a theme's name to this list effectively publishes it.

Themes can be previewed with all their available sections rendered at once. This can be an aid when developing a theme. Visit [http://localhost:4200/themes/preview/someThemeName](http://localhost:4200/themes/preview/someThemeName).

#### Theme Manifest File

The manifest file contains:

* Meta-data about a theme (such as its name)
* Which sections are provided for a theme
* The default content of those sections
* The pre-built pages for that theme

Manifest files must be kept in the `app/themes/` directory. What follows here is an example of a theme manifest:

```JavaScript
// app/themes/sailing.js
import Ember from 'ember';

export default Ember.Object.extend({

  // the name displayed on the /themes page
  displayName: 'Sailing Theme',

  // an image asset used when displaying this theme on the /themes page
  thumbnailUrl: "/image/theme-thumbnails/sailing/theme.png",

  // a space-separated list of sections available when
  // this theme is selected. These sections can be selected
  // when editing a page that uses this theme
  sections: 'paragraph-text header footer image'.w(),

  // when a section (from the whitelist above) is added to a
  // page, this is the data that will be used by default. Often
  // this text should be something generic and friendly, such as
  // "New paragraph text."
  defaultSectionData: {
                      // the keys and value format is based on what this
                      // section's handlebars template expects
    'paragraph-text': {text: 'New paragraph text'} ,
    header: {text: ''},
    footer: {text: 'New footer'},
    // the data can be as complex as the section template expects it to be
    image: {
      url: 'http://some.domain/some.png',
      width: 100,
      height: 100
    }
  },

  // the pages property describes what the pre-built pages for a given theme
  // look like. These pages appear in this order to the user after they have
  // selected this theme.
  pages: [

    // each page has meta-data used when displaying it for selection.
    { displayName: 'Captain\'s Log',
      thumbnailUrl: 'http://some.domain/some.png',
      // the meat of a page is the section list. This describes the sections
      // that will be included in the page upon creation, and their data.
      sections: [{

        // the name "templateName" is somewhat misleading. This is the name of
        // the section template used for this row.
        templateName: 'header',
        // the data used when rendering this section. This is intended as a
        // starting point for the user, nothing more.
        data: {
          text: 'Captain\s Log'
        }

      },{
        templateName: 'pargraph-text',
        data: {
          text: 'Twas a dark and stormy sea when we set sail for the west islands.'
        }
      }]
    },
    // another example page
    { displayName: 'Landing Page',
      thumbnailUrl: 'http://some.domain/some.png',
      sections: [{
        templateName: 'header',
        data: {
          text: 'Sailing Site 3000!'
        }
      },{
        templateName: 'image',
        data: {
          url: 'http://some.domain/some.png',
          width: 900,
          height: 500
        }
      },{
        templateName: 'footer',
        data: {
          text: 'See you at sea!'
        }
      }]
    }

  ]

});
```

#### Theme Templates

The first kind of theme template is the layout. Layouts wrap a page, and should contain both universal header/footer content and styles. The layout file is named `layout.hbs` and lives in the theme templates directory. For example, the layout for our sailing theme would be in `app/templates/themes/sailing/layout.hbs`.

A layout can be as simple or complex as is required, but should always have a `yield` statement for the rest of the page to be shown. An example layout:

```JavaScript
{{! app/templates/themes/sailing/layout.hbs }}
<style>
  /*
   *  scoping theme styles to your theme is strongly recommended. Here
   * the prefix "sailing-" is used.
   */
  .sailing-page-body {
    background-color: blue;
  }
</style>
<div class="sailing-page-body">
  {{yield}}
</div
<div class="sailing-footer>><img src="http://some.domain/waves.png" /></div>"
```

The second template is a section template. Section templates provide HTML for the sections of a theme, and identify where and what kind of editable content will be displayed to the user.

For example, the sailing theme manifest specified that a paragraph-text section was available. This section should have a template in the `app/templates/themes/sailing/` directory:

```JavaScript
{{! app/templates/themes/sailing/paragraph-textt".hbs }
<div>
  {{text}}
</div>
```

The simple example template above shows the text in the `data` for that section. To make the text editable, it must be rendered with a helper:

```JavaScript
{{! app/templates/themes/sailing/paragraph-text.hbs }}
<div>
  {{editable-text text=text}}
</div>
```

With this change to a helper, this text is now available to the user for editing. More than one helper can be used in a given template:

```JavaScript
{{! app/templates/themes/sailing/two-columns.hbs }}
<div class="sailing-pull-left">
  {{editable-text text=leftText}}
</div>
<div class="sailing-pull-right">
  {{editable-text text=rightText}}
</div>
```

Two editable areas are now available, and the default data for the "two-columns" section should contain values for "leftText" and "rightText".

There are several different helper with different interfaces for content editing:

* `editable-text` presents a text field for edits
* `editable-text-area` presents a textarea for edits
* `editable-image` presents an image and image uploader for edits
* `editable-wysiwyg` presents a WYSIWYG editor

#### Thumbnail Assets

You decide the URL for thumbnail assets in the theme manifest, but they should conventionally be stored in the `public/` folder with the name of the theme:

```
public/images/theme-thumbnails/sailing/theme.png
```

Naming them consistently may have benefits down the line. It is also recommended that you name the thumbnail of a theme's pre-built page in a consistent manner:

```
public/images/theme-thumbnails/sailing/about.png
```
