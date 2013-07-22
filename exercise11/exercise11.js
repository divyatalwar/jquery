$(document).ready(function () {
  var index =0;
  $('#add').click(function() {
    index = index +1;
    var $newDiv=$('<div id=" ' + (index) + '"</div>');
    var $target = ($newDiv).appendTo($('#container'))
    $target.text("div id " + index);
    $target.addClass('innerdiv');
  });
  $('#container').delegate('div' , "click", function() {
    $(this).toggleClass('highlight');
    if($(this).is(':last-child')) {
    $(this).remove();
    }
  });
});
