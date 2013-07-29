
$(document).ready(function() {
  var brandId,brandColor;
  $.ajax({
    url: "product.json",
    type: "GET",
    dataType: "json",
    success: function(data){
      jsonData = data;   
      for(i = 0;i < jsonData.length;i = i + 1) {
        url = 'images/' + jsonData[i].url;
        brand = jsonData[i].brand;
        sold_out = jsonData[i].sold_out;
        color = jsonData[i].color;
      	$innerDiv = $('<div id="' + i + '"class="inner"/>');
        $innerDiv.appendTo($('#outerDiv')).addClass('a').attr({ 'data-brand':brand,'data-color':color,'data-sold_out':sold_out});
        $innerDiv.append('<p><img class="a" src="../productgrid/'  + url +'"/>');
      }
    }
  });
  $('#filter').delegate('input[type="checkbox"]','click',function() {
    $('#outerDiv').show();    
    $('.inner').addClass("inner1");
    filter();     
  });
  function filter() {
    var filterByBrand = [], filterByColor =[],jsonFinal=[];
    var i,j;
    a=[];
    filterByBrand= filterBy("brand");
    filterByColor=filterBy("color");
    if(filterByBrand.length==0) {
      if(filterByColor.length==0)
      $('.inner').removeClass('hidden');
      else {
        for(i=0;i<filterByColor.length;i++){
          jsonFinal.push($("#"+filterByColor[i]));
        }
      }
      display(jsonFinal);
    }
    else {
      if(filterByColor.length==0){
        for(i=0;i<filterByBrand.length;i++) {
          jsonFinal.push($("#"+filterByBrand[i]));
        }
        display(jsonFinal);
      }
      else {
        for(i=0;i<filterByBrand.length;i++){
          for(j=0;j<filterByColor.length;j++){
            if (filterByBrand[i] == filterByColor[j]) {
              jsonFinal.push($("#"+filterByBrand[i]));
            }
          }
        }
        display(jsonFinal);
      } 
    }
  }
  function display(myImages) {
    for(var i = 0; i < myImages.length; i++){
	    if($('#available:checked').length>0) {
        $('#available').parent().siblings().find('input').attr('checked',false);
        if(myImages[i].attr('data-sold_out') ==0) {
          myImages[i].addClass('hidden');
        }
      }
      else
        myImages[i].addClass('hidden');
    }
  }
  function filterBy(element) {
    selected_Id=[];
    a=[];
    $('#my'+element).find('input[type="checkbox"]').each(function() {
      $(this).filter(":checked").each(function() {
  			a=findImages($(this).attr('name'),$(this).attr('value'));
      });
    });
    return a;
  }
  function findImages(name ,value) {
    $('.inner').each( function () {
      $(this).removeClass("hidden");
      if ($(this).attr('data-'+name) == value ) {
        selected_Id.push($(this).attr('id'));
      }
   });
   return selected_Id;
  }
  $('#sold_out input').click(function() 
    { 
      if(this.checked === true)
      {
        $(this).parent().siblings().find('input').attr('checked',false);
	
      }
      else
      {
        $(this).parent().siblings().find('input').attr('checked',false);
      }
      
    });
});
