$(document).ready(function() {
  var $blog = $('#blog');
  $blog.find('h3').each(function () {
    $(this).after($('<div>'));
    $targetDiv = $(this).next();
    $(this).data('ref' ,$targetDiv);
    $(this).click(function(e) {
      e.preventDefault();
      post = $(this).find('a').attr('href').split("#")[1];
      $(this).data('ref').load('blog.html #'+ post);
    });  
  });
});
