$(document).ready(function () {
  AOS.init({
    // Global settings:
    animatedClassName: 'animated', // class applied on animation
    offset: 100, // offset (in px) from the original trigger point
    delay: 100, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
  });

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $(function () {
    var navOffset = $("#navbar").height();
    $("a.page-scroll").bind("click", function (event) {
      var $anchor = $(this);
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $($anchor.attr("href")).offset().top - navOffset
          },
          1500,
          "easeInOutExpo"
        );
      event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $("body").scrollspy({
      target: ".navbar-fixed-top",
      offset: navOffset + 5
    });
  });

  // Closes the Responsive Menu on Menu Item Click
  $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click();
  });

  $(".team-container").slick({
    infinite: true,
    speed: 750,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // Track consent in memory as fallback when localStorage is unavailable
  var cookieConsentGiven = false;

  setTimeout(function () {
    // Check if user has already accepted cookies
    try {
      if (localStorage.getItem('cookieConsent') === 'true') {
        cookieConsentGiven = true;
      }
    } catch (e) {
      // localStorage unavailable, rely on in-memory flag
    }
    
    if (!cookieConsentGiven) {
      $("#cookieConsent").fadeIn(200, 'swing');
    }
  }, 2000);
  
  $("#closeCookieConsent, .cookieConsentOK").click(function () {
    // Store user's consent in localStorage and memory
    cookieConsentGiven = true;
    try {
      localStorage.setItem('cookieConsent', 'true');
    } catch (e) {
      // If localStorage is unavailable, at least track in memory for this session
    }
    $("#cookieConsent").fadeOut(200);
  });
});
