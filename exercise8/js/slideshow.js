$(document).ready(function() {
  $('body').prepend($('#slideshow'));
  $elements = $('#slideshow li');
  $length = $elements.length;
  $navigation = $('<div/>').insertAfter($('#slideshow'));
  $elements.hide();
  i = 0;
  fade($elements.first());
});
function fade(elem) {  
  elem.delay(1535).fadeIn(520, function() {
    $navigation.text((i+1) + " of " + $length);    
    elem.delay(1010).fadeOut(520);
    i = i + 1;
    if(i == $length) {
      i = 0;
      fade($elements.first());
    } 
    else {
      fade($(this).next());
    } 
  }); 
}
                     

