export var themeNames = "yankees water-world tigers landing-page".w();

var defaultThemeName = 'default';

export function lookupTheme(container, themeName){
  var theme = container.lookup('theme:'+themeName);
  theme.set('name', themeName);
  return theme;
}

export function lookupThemes(container, themeNames){
  return themeNames.map(function(themeName){
    return lookupTheme(container, themeName);
  });
}

export function lookupThemeLayout(container, themeName){
  var layout = container.lookup(
    'template:themes/' + themeName + '/layout' );
  if (!layout) {
    layout = container.lookup(
      'template:themes/'+defaultThemeName+'/layout' );
  }
  return layout;
}

export function lookupSectionTemplate(container, themeName, section) {
  var themeSectionTemplate = themeName + '/' + section.templateName,
      defaultSectionTemplate = defaultThemeName + '/' + section.templateName,
      template = container.lookup('template:themes/' + themeSectionTemplate);
  if (!template) {
    template = container.lookup('template:themes/' + defaultSectionTemplate);
  }
  return template;
}
