
$(document).ready(function() {
  jsonArray = {"clothing":[{"name":"clothing product1" , "price":500, "description":"it is a clothing product intended to give specific  functionality"},
  {"name":"clothing product2" , "price":600, "description":"it is a clothing product intended to give specific  functionality"},
  {"name":"clothing product3" , "price":700, "description":"it is a clothing product intended to give specific  functionality"}],
  "electronics":[{"name":"electronics product1" , "price":700, "description":"it is a electronics product intended to give specific  functionality"},
  {"name":"electronics product2" , "price":300, "description":"it is a electronics product intended to give specific  functionality"},
  {"name":"electronics product3" , "price":200, "description":"it is a electronics product intended to give specific  functionality"}],
  "grocery":[{"name":"grocery product1" , "price":400, "description":"it is a grocery product intended to give specific  functionality"},
  {"name":"grocery product2" , "price":100, "description":"it is a grocery product intended to give specific  functionality"},
  {"name":"grocery product3" , "price":300, "description":"it is a grocery product intended to give specific  functionality"}]}

  var mycart = new cart();
  mycart.displayCart("all");
  $('#container').delegate('#mycart , #products', 'click', function(e) {
    $(this).siblings().addClass('hidden');
    $(this).addClass('mycolor').siblings().removeClass('mycolor');    
    var classname=$(this).attr('id');
    $("."+ classname).removeClass('hidden');
  });
  $('#container').delegate('input[value="search"]', 'click', function() {
    var item=$('#search').val();
    mycart.display(item);   
  });  
  $('#container').delegate('input[value="clear"]', 'click', function() {
    $('#search').val("");     
  });
  $('#container').delegate('#types', 'change', function(){
    item=$(this).val();
    mycart.display(item);
  });
  $('#container').delegate('#add', 'click', function(){
    var id = $(this).parent().attr('id');
    mycart.addToCart(id);
  });
  $('#container').delegate('.remove', 'click', function(){
    var id = $(this).parent().parent().attr('id');
    mycart.remove(id);
  });
  $('#container').delegate('#checkout','click',function() {
    $('#container').html('<div style="text-align:center">Ooopss!! u exited the shopping cart.thanku for visiting<br><input type="submit" value="home" id="home"></div>');
  });
  $('body').delegate("#home","click",function (event) {
    location.reload();
  });
  $('#tableid').delegate('.changeValue', 'focusout', function(){
    var id = $(this).parent().parent().attr('id');
    var quantity=$('#'+ id).find('input[type="text"]').val();
    var price=$('#'+ id).find('.price').text();
    var subtotal=price*quantity;
    $('#'+id).find('.subTotal').text(subtotal);
    mycart.calculateTotal(id);
  }); 
});
function cart() {
  var kart=this;
  this.displayCart=function(item) {
    $('.myDiv').remove();
    var key;
    for (key in jsonArray){
      if (jsonArray.hasOwnProperty(key)){         
        for(var i = 0; i < jsonArray[key].length; i++){
          var newDiv = $('#myproduct').clone();
          $(newDiv).removeClass('hidden').attr({'id':i+"_"+key,'class':key+' '+'myDiv mycss'}).find('#myName').text(" name:" + jsonArray[key][i].name).siblings('#mycontent').text(" content: " + jsonArray[key][i].description).siblings('#myPrice').text(" Price: Rs." + jsonArray[key][i].price);           
          $('#lowercontent').append(newDiv);
        }
      }
    }
  }
  this.display=function(item) {
    if(item != 'all') {
      $('.myDiv').addClass('hidden');
      $("."+item).removeClass('hidden');
    }
    else {
      $('.myDiv').removeClass('hidden');
    }
      
  }
  this.addToCart=function(myId){
    var myRegex=/^[0-9]+$/;
    var bool= false;
    var id = myId.split("_");
    var item=id[1];
    var product=id[0];
    var productName = jsonArray[item][product].name;
    var price = jsonArray[item][product].price;
    var quantity = $('#'+ myId).find('input').val();
    var subTotal = price*quantity;
    if(myRegex.test(quantity)){
      $('#tableid').append('<tr id="row' +myId +'"><td class="product">' + productName + '</td><td class="price">' + price + '</td><td class><input type="text" size="1" class="changeValue" value = "' + quantity + '"></td><td class="subTotal">' + subTotal + '</td><td><input type="submit" value="remove" class="remove" id="remove-' + myId + '"></td></tr>');
      kart.calculateTotal();
      $('#mycart').text('My Cart ('+($('#tableid tr').length-1) +')');
      $('#'+ myId).find('input').val(""); 
      $('#'+myId).find('input').prop('disabled',true);  
    }
    else {
     alert("please specify the valid quantity");
    }
  }
  this.calculateTotal=function() {
    total=0;
    $('td.subTotal').each(function() {
    total+=parseInt($(this).text());
  });
    $('#totalprice').val(total);
  }
  this.remove=function(id){
    $("#"+id).remove();
    kart.calculateTotal();
    $('#totalprice').val(total);
    $('#mycart').text('My Cart ('+($('#tableid tr').length-1) +')');
  }
}










