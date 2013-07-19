$(document).ready(function() {
  var $blog = $('#blog');
  $blog.find('h3').each(function () {
    $(this).after($('<div>'));
    $targetDiv = $(this).next();
    $(this).data('ref' ,$targetDiv);
  });
  $blog.find('h3').click(function(e) {
    e.preventDefault();
    id = $(this).find('a').attr('href').split("#")[1];
    $(this).data('ref').load('blog.html #'+ id);
  });
});
