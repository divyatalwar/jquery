$(document).ready(function() {
  //solution to 1
  var list = $('#myList');
  for(var i = 0 ; i < 5 ; i++) {
    $('#myList').append('<li>list item' + (i+1) +'</li>');
  }
  //solution to 2
  $('#myList li').filter(':odd').remove();
  //solution to 3
  $('div.module:last').prepend('<h2> heading added </h2><p> paragraph added </p>');
  //solution to 4
  $('#specials select[name="day"]').append("<option value='wednesday'>wednesday</option>");
  //solution to 5
  $('<div class="module"/>').insertAfter('div.module:last');
  $('img[src="images/vegetable.jpg"]').clone().appendTo('div.module:last');
});
