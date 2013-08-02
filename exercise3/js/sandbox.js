$(document).ready(function() {
  //solution to 1.
  var list = $('#myList');
  for(var i = 0 ; i < 5 ; i++) {
    ($('<li>').text('item' + (i+1))).appendTo(list);
  }
  //solution to 2.
  $('#myList li:odd').remove();
  //solution to 3
  $('div.module:last').append($('<h2> heading added </h2><p> paragraph added </p>'));
  //solution to 4
  $('#specials select[name="day"]').append("<option value='wednesday'>wednesday</option>");
  //solution to 5
  var newDiv= $('<div class="module">');
  newDiv.append($('img:first').clone()).insertAfter('div.module:last');
});
