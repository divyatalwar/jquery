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
      	$innerDiv = $('<div id="' + i + '"class="a"/>');
        $innerDiv.appendTo($('#outerDiv')).attr({ 'data-brand':brand,'data-color':color,'data-sold_out':sold_out});
        $innerDiv.append('<img  src="../productgrid/'  + url +'"/>');
      }
    }
  });
  $('#filter').delegate('input','click',function() {
    $('.a').addClass('hidden');    
    filter();     
  });
  function filter() {
    var a = null;
    a = filterby("brand",$('.a')); 
    a = filterby("color",a);
    if($('#available:checked').length){
      a = filterby("sold_out",a);
    }
    a.removeClass('hidden');
  }
  function filterby(element,jqueryobject) {
    var myselector = "";
    if($('#my' + element + ' :input:checked').length > 0) {
      $('#my' + element + ' :input:checked').each( function(index) {
        myselector += (index == 0)? "" :", ";
        myselector += '[data-' + element + '="' + $(this).val() + '"]';
    });
      return jqueryobject.filter(myselector);
    }
    else {
      return jqueryobject;
    }
  }
});
