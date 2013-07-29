//creating drop down
$(document).ready(function() {
  $('#nav li').hover(function() {
    $(this).addClass('hover').children('ul').show();
  },
  function() {
    $(this).removeClass('hover').children('ul').hide();
  });
});
