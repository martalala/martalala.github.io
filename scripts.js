$(function() {

  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('#last-projects').offset().top }, 'slow');
    return false;
  });
	
});