function ajaxCall() {
  var jsonData;
  $.ajax({
    url: "specials.json",
    type: "GET",
    dataType: "json",
    async:false,
    success: function(data){
    jsonData = data;        
    }
  });
  return jsonData;
}
$(document).ready(function() {
  var myData = [];
  var $special = $('#specials');
  $('li.buttons').remove();  
  var $targetDiv = ($('<div/>')).appendTo($special);
  $('select[name = "day"]').change(function() {
    if(!($(this).val())) {
      $targetDiv.html("");
      return 0;
    }
    else {
      if(myData.length == 0){
        myData = ajaxCall();
      }
      var key = myData[$(this).val()];
      $targetDiv.html(key.title + "<br/><p>" + key.text + "</p>");
      $targetDiv.css('color' , key.color);
      $targetDiv.append('<p><img src="../exercise10'  + key.image +'"/>'); 
     }
  });
});
