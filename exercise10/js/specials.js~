$(document).ready(function() {
  var $special = $('#specials');
  $targetDiv = ($('<div/>')).appendTo($special);
  $.ajax({
    url: "specials.json",
    type: "GET",
    dataType: "json",
    success: function(data){
    jsonData = data;        
    }
  });
  $('select[name="day"]').change(function() {
    $('li.buttons').remove();
    var key = jsonData[$(this).val()];
    $targetDiv.html(key.title + "<br/><p>" + key.text + "</p>");
    $targetDiv.css('color' , key.color);
    $targetDiv.append('<p><img src="../exercise10'  + key.image +'"/>');
  });
});
