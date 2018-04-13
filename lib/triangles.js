define([
  'jquery',
  'lodash',
  'trianglify'
], function($, _, Trianglify) {

  var init = function () {
    $(window).on('resize', _.throttle(function(){
      _generatePattern('header .triangles', 't1');
      // _generatePattern('aside .no-cover', 't2');
    }, 50));

    _generatePattern('header .triangles', 't1');
  };

  var _generatePattern = function(target) {

    var $target = $(target),
      options = {
        variance: 0.85,
        palette: Trianglify.colorbrewer,
        color_space: 'rgb',
        width: $target.width() * 2,
        height: $target.height() * 2,
        stroke_width: 100 * 2,
        x_colors: [
          "#a6bddb",
          "#67a9cf",
          "#3690c0",
          "#02818a",
          "#016c59",
          "#014636"
        ],
        y_colors: [
          "#ffffff",
          // "#f0f0f0",
          "#d9d9d9",
          // "#bdbdbd",
          "#969696",
          // "#737373",
          "#525252",
          // "#252525",
          "#000000"
        ],
        cell_size: 60  *2
      };

    console.log('options', options)

    var pattern = new Trianglify(options),
      patternSVG = pattern.png();

    $target.css('background-image', 'url(' + patternSVG + ')').addClass('activate');
  };

  return {
    init: init
  }

});
