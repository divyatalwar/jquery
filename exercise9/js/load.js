$(document).ready(function() {
  var $blog = $('#blog');
  $blog.find('h3').each(function () {
    $(this).after($('<div>'));
    $targetDiv = $(this).next();
    $(this).data('ref' ,$targetDiv);
    })
    .click(function(e) {
      e.preventDefault();
      post = $(this).find('a').attr('href');
      $(this).data('ref').load(post);
    });  
  });
