
(function($){

  $.aboveViewport = function(element){
    var topOfViewPort = $(window).scrollTop();
    var top = $(element).offset().top;
    return top <= topOfViewPort;
  }

  $.belowViewport = function(element){
    var bottomOfViewport = $(window).height() + $(window).scrollTop();
    var top = $(element).offset().top;
    return (top + $(element).outerHeight() ) >= bottomOfViewport;
  };

  $.insideViewport = function(element){
    return !$.aboveViewport(element) && !$.belowViewport(element) && !$.offscreenBottom(element) && !$.offscreenTop(element);
  };

  $.offscreenBottom = function(element){
    var bottomOfViewport = $(window).height() + $(window).scrollTop();
    var top = $(element).offset().top;
    return top >= bottomOfViewport;
  };

  $.offscreenTop = function(element){
    var topOfViewPort = $(window).scrollTop();
    var top = $(element).offset().top;
    return (top + $(element).outerHeight() ) <= topOfViewPort;
  };

  $.extend($.expr[":"], {

    insideViewport : function(element, index, details, collection){
      return $.inViewport(element);
    },

    aboveViewport : function(element, index, details, collection){
      return $.aboveViewport(element);
    },

    belowViewport : function(element, index, details, collection){
      return $.belowViewport(element);
    },

    offscreenTop : function(element, index, details, collection){
      return $.offscreenTop(element);
    },

    offscreenBottom : function(element, index, details, collection){
      return  $.offscreenBottom(element);
    },

    percentOnScreen: function( element, index, details, collection ){
      var num = parseInt(details[3],10);
      var percentOnScreen = 100;
      var pixelsOnScreen = $(element).outerHeight();
      var topOfViewPort = $(window).scrollTop();
      var bottomOfViewport = $(window).height() + $(window).scrollTop();
      var top = $(element).offset().top;

      if($.belowViewport(element)){
        pixelsOnScreen = bottomOfViewport - top;
      }

      if($.aboveViewport(element)){
        pixelsOnScreen = Math.abs( topOfViewPort - (top + $(element).outerHeight()) );
      }
     
      percentOnScreen = ( pixelsOnScreen / $(element).outerHeight() ) * 100;

      return  percentOnScreen >= num && percentOnScreen < 101;
    },

    pixelsOnScreen: function( element, index, details, collection ){
      var num = parseInt(details[3],10);
      var pixelsOnScreen = $(element).outerHeight();
      var topOfViewPort = $(window).scrollTop();
      var bottomOfViewport = $(window).height() + $(window).scrollTop();
      var top = $(element).offset().top;

      if($.belowViewport(element)){
        pixelsOnScreen = bottomOfViewport - top;
      }

      if($.aboveViewport(element)){
        pixelsOnScreen = ( topOfViewPort - (top + $(element).outerHeight()) ) * -1;
      }

      return  pixelsOnScreen >= num;
    }

  });

})(window.jQuery);