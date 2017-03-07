/**
 * Pixel2HTML - rymasheuski/test
 */

var msg = 'Pixel2HTML - rymasheuski/test';

function printLog(log){
    'use strict';
  return console && console.log(log);
}

printLog(msg);


$(".animated").removeClass("no-js");


//animation for slider

$(document).ready(function() {
  $('.slider').on('init', function(e, slick) {
    var $firstAnimatingElements = $('div.slider-item:first-child').find('[data-animation]');
    doAnimations($firstAnimatingElements);
  });
  $('.slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
    var $animatingElements = $('div.slider-item[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
    doAnimations($animatingElements);
  });
  $('.slider').slick({
    autoplay: false,
    dots: true,
    fade: true
  });
  function doAnimations(elements) {
    var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    elements.each(function() {
      var $this = $(this);
      var $animationDelay = $this.data('delay');
      var $animationType = 'animated ' + $this.data('animation');
      $this.css({
        'animation-delay': $animationDelay,
        '-webkit-animation-delay': $animationDelay
      });
      $this.addClass($animationType).one(animationEndEvents, function() {
        $this.removeClass($animationType);
      });
    });
  }
});


$(document).ready(function() {
  new WOW().init();
});



//sticky header

var options = {
  offset: 300,
  offsetSide: 'top',
  classes: {
    stick: 'header--sticky',
    unstick: 'header--unsticky'
  },

  throttle: 250

}

var header = new Headhesive('.header', options);


//scroll to

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  }
});


$('body').scrollspy({ target: '#menu' })

