
(function($){

  $.extend($.expr[":"], {

    percentOnScreen: function( element, index, details, collection ){

      var num = parseInt(details[3],10);
      var bottomOfViewport = $(window).height() + $(window).scrollTop();

      var top = $(element).offset().top;
      var pixelsOnScreen = bottomOfViewport - top;
      var percentOnScreen = ( pixelsOnScreen / $(element).outerHeight() ) * 100;
      console.log(pixelsOnScreen,percentOnScreen);

      return  percentOnScreen >= num;

    },

    pixelsOnScreen: function( element, index, details, collection ){

      var num = parseInt(details[3],10);
      var bottomOfViewport = $(window).height() + $(window).scrollTop();

      var top = $(element).offset().top;
      var pixelsOnScreen = bottomOfViewport - top;

      return  pixelsOnScreen >= num;

    }

  });

})(window.jQuery);