$(function() {
  var jsonArray = {"clothing":[{"name":"clothing product1" , "price":500, "description":"it is a clothing product intended to give specific  functionality"},
  {"name":"clothing product2" , "price":600, "description":"it is a clothing product intended to give specific  functionality"},
  {"name":"clothing product3" , "price":700, "description":"it is a clothing product intended to give specific  functionality"}],
  "electronics":[{"name":"electronics product1" , "price":700, "description":"it is a electronics product intended to give specific  functionality"},
  {"name":"electronics product2" , "price":300, "description":"it is a electronics product intended to give specific  functionality"},
  {"name":"electronics product3" , "price":200, "description":"it is a electronics product intended to give specific  functionality"}],
  "grocery":[{"name":"grocery product1" , "price":400, "description":"it is a grocery product intended to give specific  functionality"},
  {"name":"grocery product2" , "price":100, "description":"it is a grocery product intended to give specific  functionality"},
  {"name":"grocery product3" , "price":300, "description":"it is a grocery product intended to give specific  functionality"}]}

  var mycart = new cart(jsonArray);
  mycart.displayCart("all");
  $('#container').delegate('#mycart , #products', 'click', function(e) {
    $(this).siblings().addClass('hidden');
    $(this).addClass('mycolor').siblings().removeClass('mycolor');    
    var classname=$(this).attr('id');
    $("."+ classname).removeClass('hidden');
  });
  $('#container').delegate('input[value="search"]', 'click', function() {
    var item=$('#search').val();
    mycart.selectiveDisplay(item);   
  });  
  $('#container').delegate('input[value="clear"]', 'click', function() {
    $('#search').val("");
    $('.myDiv').removeClass('hidden');    
  });
  $('#container').delegate('#types', 'change', function(){
    var item=$(this).val();
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
    $('#container').html('<div style="text-align:center">Ooopss!! u exited the shopping cart.thanku for visiting<br><a href="hidden2.html">home</a></div>');
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
var cart=function(jsonCart) {
  var jsonArray=jsonCart;
  var kart=this;
  this.displayCart=function(item) {
    $('.myDiv').remove();
    var key;
    for (key in jsonArray){
      if (jsonArray.hasOwnProperty(key)){         
        for(var i = 0; i < jsonArray[key].length; i++){
          var newDiv = $('#myproduct').clone();
          $(newDiv).removeClass('hidden').attr({'id':i+"_"+key,'class':key+' '+'myDiv mycss'}).children('.myName').text(" name:" + jsonArray[key][i].name).siblings('.mycontent').text(" content: " + jsonArray[key][i].description).siblings('.myPrice').text(" Price: Rs." + jsonArray[key][i].price);        
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
  this.selectiveDisplay=function(item) {
    $('.myDiv').addClass('hidden');
    $(".myDiv:contains("+item+")").removeClass('hidden');
  }
  this.addToCart=function(myId){
    var myRegex=/^[0-9]+$/;
    var productName=$('#'+myId).children('.myName').text();
    var price=$('#'+myId).children('.myPrice').text().split("Rs.")[1];    
    var quantity = $('#'+ myId).children('input').val();
    var subTotal = price*quantity;
    if(myRegex.test(quantity)){
      $('#tableid').append('<tr id="row-' +myId +'"><td class="product">' + productName + '</td><td class="price">' + price + '</td><td class><input type="text" size="1" class="changeValue" value = "' + quantity + '"></td><td class="subTotal">' + subTotal + '</td><td><input type="submit" value="remove" class="remove" id="remove-' + myId + '"></td></tr>');
      kart.calculateTotal();
      $('#mycart').text('My Cart ('+($('#tableid tr').length-1) +')');
      $('#'+ myId).find('input').val("");
      $('#'+myId).find('input').prop('disabled',true);  
      $('#'+myId).find('button').prop('disabled',true);
    }
    else {
     alert("please specify the valid quantity");
    }
  }
  this.calculateTotal=function() {
    var total=0;
    $('td.subTotal').each(function() {
    total+=parseInt($(this).text());
  });
    $('#totalprice').val(total);
  }
  this.remove=function(id){
    $("#"+id).remove();
    var divId = id.split("-")[1];
    $('#'+divId).find('input').prop('disabled',false);
    $('#'+divId).find('button').prop('disabled',false);
    kart.calculateTotal();
    if ($('#tableid tr').length-1) {
      $('#mycart').text('My Cart ('+($('#tableid tr').length-1) +')');  
    }
    else {
      $('#mycart').text('My Cart ');
    }
  }
}










