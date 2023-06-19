// Add smooth scrolling to anchor links
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
      event.preventDefault();
      var target = $(this.getAttribute('href'));
      if (target.length) {
        $('html, body').stop().animate({
          scrollTop: target.offset().top
        }, 1000);
      }
    });
  });
  