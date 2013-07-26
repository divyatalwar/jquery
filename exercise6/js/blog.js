//reveal hidden text
$(document).ready(function() {
  var $blogElement = $('#blog');
  $blogElement.find('h3').click(function (event) {
    event.preventDefault();
    // finds the paragraphs with the class excerpt and slides it down and slides up the other siblings.
    $(this).siblings('p.excerpt').slideDown(300);
    $(this).parent().siblings().children('p.excerpt').slideUp();
  });
});


