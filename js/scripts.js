$(document).ready(function() {
  $(window).on('scroll', function() {
    var topOffset = $(document).scrollTop();
    if (topOffset >= $(window).height()) {
      $('#sub-nav').css('position', 'fixed');
      $('#sub-nav').css('top', '0');
      $('#sub-nav').css('left', '0');
      $('#sub-nav').css('z-index', '100');
      $('#sub-nav').css('width', '100%');
    } else {
      $('#sub-nav').css('position', 'static');
    }
  });

  $('.search a').click(function(e) {
    e.preventDefault();
    // $('#search-panel').css('visibility', 'visible');
    $('#search-panel').addClass('panel-visible');

  });

  $('.go-button').click(function() {
    // $('#search-panel').css('visibility', 'hidden');
    $('#search-panel').removeClass('panel-visible');
  });
});
