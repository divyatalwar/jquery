//reveal hidden text
$(document).ready(function() {
  var $blogElement = $('#blog');
  $blogElement.find('h3').click(function (e) {
    e.preventDefault();
    $(this).siblings('p.excerpt').slideDown(300);
    $(this).parent().siblings().children('p.excerpt').slideUp();
  });
});


