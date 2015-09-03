/**
 * @param color hex string e.g. '#FF00AA'
 * @param percent positive or negative from -100 to 100
 * @return a new hexvalue lightened/darkened by `percent`
 */
function shadeColor(color, percent) {
  var num = parseInt(color.slice(1), 16);
  var amt = Math.round(2.55 * percent);

  var R = (num >> 16) + amt;
  var B = (num >> 8 & 0x00FF) + amt;
  var G = (num & 0x0000FF) + amt;

  var hexValue = '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);

  return hexValue;
}

export default function(propName,  options){
  var adjustment;

  var color = options.contexts[0][propName];

  if (options.hash.lighten){
    adjustment = parseInt(options.hash.lighten, 10);
  } else if (options.hash.darken) {
    adjustment = -1 * parseInt(options.hash.darken, 10);
  }

  if (adjustment) {
    color = shadeColor(color, adjustment);
  }

  return color;
}
