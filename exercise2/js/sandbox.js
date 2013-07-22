$(document).ready(function() {
  //1
  $('img').each(function(index) {
  alert("image" + (index + 1) + " alt attribute : " + $(this).attr('alt'));
  });
  //2
  $('.input[type="text"]').closest('form').addClass('sampleClass');
  //3
  $('#myList li.current').removeClass('current').next().addClass('current');
  //4
  alert($('#specials ').find('select[name="day"]').end().find('input[type="submit"]').val());   
  //5
  $('#slideshow li:first-child').addClass('current').siblings().addClass('disabled');
});
