$(document).ready(function () {
  var array=[];
  //by default all radio buttons are disabled
  $(":radio").attr("disabled", true);
  // a click event bind to the rating parameters.
  $('td.ratingparameters').bind('click', function() {
    $(":radio").attr("disabled", true);
    $(this).addClass('highlight').siblings().removeClass('highlight');
    //if user simly clicks on the ratings wihtout selecting the product nothings happens.
    if($('td.product.highlight').length > 0) {
      $name=$('td.product.highlight').attr('id');
      $value = $(this).attr('id');
      $(":radio[value='" + $value + "'][name='" +$name+"']").attr("checked", true);
      //checking if the radiobutton belongs to the same class..i.e. we are changing our ratings for a particular product and if it is we  should make sure that only selected radiobuttons are enabled.
      var index = array.map(function(el){ return el[1];}).indexOf($name);
      if(index >=0) {
        array.splice(index, 1);
      }
      array.push([$value,$name]);
      //enabling only selected radiobuttons.
      for(i=0;i<array.length;i++){
        $(":radio[value='" + array[i][0] + "'][name='" +array[i][1] +"']").removeAttr('disabled');
      }
    }
    else {  
      $(":radio").attr("disabled", true);
    }
  }); 
  //a click function bind to the product
  $('td.product').bind('click', function() {
    $('td.ratingparameters').removeClass('highlight');
    $(this).closest('#grid').find('.product').removeClass('highlight');
    $(this).addClass('highlight');
  });
});
