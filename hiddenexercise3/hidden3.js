$(document).ready(function () {
  var array=[];
  //if user simly clicks on the ratings wihtout selecting the product nothings happens.
  $('td.ratingparameters').bind('click', function() {
    //$(this).addClass('highlight').siblings().removeClass('highlight');
    $(":radio").attr("disabled", true); 
  });
  //radio buttons are by default disabled.are only selected as per choices
  $(":radio").attr("disabled", true); 
  //a click function bind to the product and thereafter the rating
  $('td.product').bind('click', function() {
    $('td.ratingparameters').removeClass('highlight');
    $(this).closest('#grid').find('.product').removeClass('highlight');
    $(this).addClass('highlight');
    $name = $(this).attr('id');
    $('td.ratingparameters').bind('click', function() {
      $(this).addClass('highlight').siblings().removeClass('highlight');
      $value = $(this).attr('id');
      $(":radio[value='" + $value + "'][name='" +$name+"']").attr("checked", true);
      //checking if the radiobutton belongs to the same class..i.e. we are changing our ratings for a particular product and if it is we should make sure that only selected radiobuttons are enabled.
      var index = array.map(function(el){ return el[1];}).indexOf($name);
      if(index >=0) {
        array.splice(index, 1);
      }
      array.push([$value,$name]);
      //enabling only selected radiobuttons.
      for(i=0;i<array.length;i++){
        $(":radio[value='" + array[i][0] + "'][name='" +array[i][1] +"']").removeAttr('disabled');
      }
    });
  });
});
