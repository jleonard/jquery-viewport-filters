
(function($){

  $.extend($.expr[":"], {

    percentOnScreen: function( element, index, details, collection ){

      var num = parseInt(details[3],10);
      var bottomOfViewport = $(window).height() + $(window).scrollTop();

      var top = $(element).offset().top;
      var pixelsOnScreen = bottomOfViewport - top;
      var percentOnScreen = pixelsOnScreen / $(element).outerHeight();
      console.log(pixelsOnScreen,percentOnScreen);

      if(percentOnScreen >= num){
        console.log()
        console.log(element);
        console.log('pixelsOnScreen ',pixelsOnScreen +'px');
        console.log('percentOnScreen ',percentOnScreen +'%'); 
        console.log('eval against ',num);
      }

      return  percentOnScreen >= num;

    }
  });

})(window.jQuery);

$(window).on('scroll',function(e){
  var o = $('.cube:percentOnScreen(25)');
  console.log('\n');
  //console.log(o);
});