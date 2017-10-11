wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100
  }
);
wow.init();

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {

  var navOffset = $('#navbar').height();
  console.log(navOffset);
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - navOffset
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });

  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: navOffset + 5
  })
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});