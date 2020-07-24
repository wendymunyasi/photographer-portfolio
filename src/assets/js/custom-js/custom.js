$(function() {
  var effects = 'animated bounce';
  var effectsEnd = 'animationend onAnimationEnd mozAnimationEnd webkitAnimationEnd';

  $('img.arrow').hover(function() {
    $(this).addClass(effects).one(effectsEnd, function() {
      $(this).removeClass(effects);
    });
  });
});

window.addEventListener('scroll', function(e) {

  if( $(window).scrollTop() <= 50) {
      $('.wow').removeClass('animated');
      $('.wow').removeAttr('style');
      new WOW().init();
  }

});
