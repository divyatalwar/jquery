$(document).ready(function() {
  //by default all radio buttons are disabled
  $(":radio").attr("disabled", true);
  // a click event bind to the rating parameters.
  $('td.ratingparameters').bind('click', function() {
    $(":radio").attr("disabled", true);
    $(this).addClass('highlight').siblings().removeClass('highlight');
    //if user simly clicks on the ratings wihtout selecting the product nothings happens.
    if($('td.product.highlight').length > 0) {
      var $name = $('td.product.highlight').attr('id');
      var $value = $(this).attr('id');
      $(":radio[value='" + $value + "'][name='" +$name+"']").attr("checked", true);
      for(var i=0;i<$('input[type="radio"]:checked').length;i++) {
        $('input[type="radio"]:checked').removeAttr('disabled');
      }
    }
    else {  
      $(":radio").attr("disabled", true);
    }
  }); 
  //a click function bind to the product
  $('td.product').bind('click', function() {
    $('td.ratingparameters').removeClass('highlight');
    $('#grid').find('.product').removeClass('highlight');
    $(this).addClass('highlight');
  });
});
