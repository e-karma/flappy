/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
// var pickFiles = require('broccoli-static-compiler');

// var extraAssets = pickFiles('vendor/bootstrap/dist/fonts',{
//     srcDir: '/',
//     files: ['**/*'],
//     destDir: '/fonts'
// });
// var extraFonts = pickFiles('vendor/font-awesome/fonts',{
//     srcDir: '/',
//     files: ['**/*'],
//     destDir: '/fonts'
// });

// var appCss = compileSass(sassSources, 'app.custom_scss',
//   'assets/app.css');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    emberCliFontAwesome: {
      useScss: true
    }
  });

  app.import('bower_components/bootstrap/dist/js/bootstrap.js');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css');

  app.import('bower_components/summernote/dist/summernote.css');
  app.import('bower_components/summernote/dist/summernote-bs3.css');
  app.import('bower_components/summernote/dist/summernote.js');

  app.import('bower_components/jquery-minicolors/jquery.minicolors.js');
  app.import('bower_components/jquery-minicolors/jquery.minicolors.css');
  // var minicolorsAssets = pickFiles('vendor/jquery-minicolors/', {
  //   srcDir: '/',
  //   files: ['**/*.png'],
  //   destDir: '/assets'
  // });

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.



// module.exports = mergeTrees([app.toTree(),
//                             appCss,
//                             extraAssets,
//                             extraFonts,
//                             minicolorsAssets], {overwrite: true});



  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
