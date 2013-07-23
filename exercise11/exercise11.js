$(document).ready(function () {
  var index =0;
  $('#add').click(function() {
    index = index +1;
    var $newDiv=$('<div id=" ' + (index) + '" class="newDiv"</div>');
    var $target = ($newDiv).appendTo($('#container')).text("div id " + index ).addClass('innerdiv');
  });
  $('#container').delegate('div.newDiv' , "click", function() {
    $(this).toggleClass('highlight');
    if($(this).is(':last-child')) {
    $(this).remove();
    }
  });
});
