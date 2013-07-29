jsonArray = {"clothing":[{"name":"clothing product1" , "price":500, "description":"it is a clothing product intended to give specific  functionality"},
{"name":"clothing product2" , "price":600, "description":"it is a clothing product intended to give specific  functionality"},
{"name":"clothing product3" , "price":700, "description":"it is a clothing product intended to give specific  functionality"}],
"electronics":[{"name":"electronics product1" , "price":700, "description":"it is a electronics product intended to give specific  functionality"},
{"name":"electronics product2" , "price":300, "description":"it is a electronics product intended to give specific  functionality"},
{"name":"electronics product3" , "price":200, "description":"it is a electronics product intended to give specific  functionality"}],
"grocery":[{"name":"grocery product1" , "price":400, "description":"it is a grocery product intended to give specific  functionality"},
{"name":"grocery product2" , "price":100, "description":"it is a grocery product intended to give specific  functionality"},
{"name":"grocery product3" , "price":300, "description":"it is a grocery product intended to give specific  functionality"}]}

$(document).ready(function() {
  $('#mycart1').hide();
  var cart = new myCart();
  $('#container').delegate('#mycart', 'click', function(){
    $('#mycart1').show();
    $('#lowercontent').hide();
    $('#lowerportion').hide();
  });
  $('#container').delegate('#products', 'click', function(){
    $('#mycart1').hide();
    $('#lowercontent').show();
    $('#lowerportion').show();
  });  
  $('#container').delegate('#types', 'change', function(){
    item = $('#types option:selected').val();
    cart.displayCart(item);
  });
  $('#container').delegate('#add', 'click', function(){
    var id = $(this).parent().attr('id');
    cart.addToCart(id);
  });
  $('#container').delegate('.remove', 'click', function(){
    var id = $(this).attr('id');
    cart.remove(id);
  });
  $('#container').delegate('#checkout','click',function() {
    $('#mycart1').hide();
    $('#lowercontent').hide();
    $('#lowerportion').hide();
    $('#container').html("thanku for shopping").css('font-size','24');
  });   
});
function myCart(){
  var kart=this;
  this.displayCart = function(item){
    $('#products').addClass('border');
    $('.myDiv').remove();
    for(var i = 0; i < jsonArray[item].length; i++) {
        var newDiv = $('#myproduct').clone();
        $(newDiv).removeClass('hidden').attr({'id':i+"_"+item,'class':i+"_"+item +" " +'myDiv'}).find('#myName').text(" name:" + jsonArray[item][i].name).siblings('#mycontent').text(" content: " + jsonArray[item][i].description).siblings('#myPrice').text(" Price: Rs." + jsonArray[item][i].price);           
        $('#lowercontent').append(newDiv);
    }
  }
  this.addToCart = function(myId){
    var myRegex=/^[0-9]+$/;
    var bool= false;
    id = myId.split("_");
    item=id[1];
    product=id[0];
    var productName = jsonArray[item][product].name;
    var price = jsonArray[item][product].price;
    var quantity = $('.'+ myId).find('input').last().val();
    var subTotal = price*quantity;
    if(myRegex.test(quantity)){
      $('#tableid tr').each(function() {
        if($(this).attr('id')==myId) {
          $(this).find('td:nth-child(3)').text(quantity);
          $(this).find('td:nth-child(4)').text(subTotal);
          bool=true;
          }
      });
      $('.'+ myId).find('input').val("");
      if(!bool) {
        $('#tableid').append('<tr id="' +myId +'"><td>' + productName + '</td><td>' + price + '</td><td>' + quantity + '</td><td>' + subTotal + '</td><td><input type="submit" value="remove" class="remove" id="remove/' + myId + '"></td></tr>');
      }
      kart.calculateTotal();
      $('#mycart').text('My Cart ('+($('#tableid tr').length-1) +')');   
    }
    else {
      alert("please specify the valid quantity");
    }
  }
  this.calculateTotal=function() {
    var total=0;
    $('#tableid td:nth-child(4)').each(function() {
      total+=parseInt($(this).text());
    });
    $('#totalprice').val(total);
  }
  this.remove = function(id){
    rowId=id.split("/")[1];
    $('tr#' + rowId).remove();
    kart.calculateTotal();
    $('#totalprice').val(total);
    $('#mycart').text('My Cart ('+($('#tableid tr').length-1) +')');
  }
}










