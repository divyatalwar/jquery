$(document).ready(function() {
  var jsonData = null;
  $.ajax({
    url: "product.json",
    type: "GET",
    dataType: "json",
    success: function(data){
      jsonData = data;   
      var outerDiv=$('#outerDiv');
      for(var i = 0; i < jsonData.length; i = i + 1) {
        var url = 'images/' + jsonData[i].url;
        var brand = jsonData[i].brand;
        var sold_out = jsonData[i].sold_out;
        var color = jsonData[i].color;
      	var $innerDiv = $('<div id="' + i + '"class="innerdiv">');
        $innerDiv.appendTo(outerDiv).attr({ 'data-brand':brand,'data-color':color,'data-sold_out':sold_out});
        $innerDiv.append('<img  src="../productgrid/'  + url +'"/>');
      }
    }
  });
  $('#filter').delegate('input','click',function() {
    $('.innerdiv').addClass('hidden');    
    filter();     
  });
  function filter() {
    var filtered_set = $('.innerdiv');
    filtered_set = filterby("brand", filtered_set); 
    filtered_set = filterby("color", filtered_set);
    if ($('#available:checked').length){
      filtered_set = filterby("sold_out", filtered_set);
    }
    filtered_set.removeClass('hidden');
  }
  function filterby(element, jqueryobject) {
    var myselector = [];
    if ($('#my' + element + ' :input:checked').length > 0) {
      $('#my' + element + ' :input:checked').each(function(index) {
        myselector.push('[data-' + element + '="' + $(this).val() + '"]');
      });
      return jqueryobject.filter(myselector.join(','));
    }
    else {
      return jqueryobject;
    }
  }
});
