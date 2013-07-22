$(document).ready(function() {
  //solution to 1
  alert($('div.module').html());
  //solution to 2
  alert($('#myList li:nth-child(3)').html());
  alert($('#myList li:eq(2)').html());
  alert($('#myList li:contains("item 3")');
  //solution to 3 
  alert($("label[for='q']").html());
  //solution to 4
  alert($(':hidden').length);
  //solution to 5
  alert($('img[alt]').length);
  //solution to 6
  $('tr:odd').length ;
  });
});
