$(document).ready(function() {
  //solution to 1
  var listArray = [];
  var divArray = [];
  var list = $('#myList');
  for(var i = 0 ; i < 5 ; i++) {
    listArray.push('<li>item' + (i+1) +'</li>');
  }
  $('#myList').append(listArray.join(''));
  //solution to 2
  $('#myList li:odd').remove();
  //solution to 3
  divArray.push('<h2> heading added </h2><p> paragraph added </p>');
  $('div.module:last').append(divArray.join(''));
  //solution to 4
  $('#specials select[name="day"]').append("<option value='wednesday'>wednesday</option>");
  //solution to 5
  $('<div class="module"/>').insertAfter('div.module:last');
  $('*').find('img').first().clone().appendTo('div.module:last');
});
