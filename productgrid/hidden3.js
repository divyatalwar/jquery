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
    var filteredSet = $('.innerdiv');
    filteredSet = filterby("brand", filteredSet); 
    filteredSet = filterby("color", filteredSet);
    filteredSet = filterby("sold_out", filteredSet);
    filteredSet.removeClass('hidden');
  }
  function filterby(element, jqueryobject) {
    var myselector = [];
    var checkedCriteria = $('#my' + element + ' input[value]:checked');
    if (checkedCriteria.length > 0) {
      checkedCriteria.each(function(index) {
        myselector.push('[data-' + element + '="' + $(this).val() + '"]');
      });
      return jqueryobject.filter(myselector.join(','));
    }
    else {
      return jqueryobject;
    }
  }
});
