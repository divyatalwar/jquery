$(document).ready(function() {
  var index = 0;
  var jsonEmployees = [{'name':'akhil'},{'name':'HK'},{'name':'waseem'},{'name':'alok'},{'name':'Rd'}]
  var jsonRole = { 'ROR' : [{ 'type' : 'ROR Developer' }], 'Android' : [{ 'type' : 'Android Developer ' }] ,'Jquery' : [{ 'type' : 'Jquery Developer' }]};
  var employeeDiv = new employee(jsonEmployees);
  employeeDiv.displayEmployee();
  var rolediv = new employee(jsonRole);
  rolediv.displayRoles();
  rolediv.displayTodo();
  newImgDiv = $('<img/>');
  $('.employees').draggable({
    revert : 'invalid'  ,
    helper : 'clone',
    opacity : 0.5
  });
  $('.role').droppable({
    drop : function(event, ui) {
      var $this = $(this);
      var content = ui.draggable.text();
      var containerDiv = $this.attr('id');
      var repeatedClass = $this.find('div[data-name='+ content+']');
      if (!repeatedClass.length) {
        var newLiDiv = $('<div id ="' + ( index++ ) + '"></div>').attr({'data-name':content,'data-type':containerDiv}).appendTo($this);
        var newLiElement = ui.draggable.clone().removeClass().appendTo(newLiDiv);
        var targetDiv = $('#todos .' + containerDiv );
        var newRolesDiv = $('<div id ="' + ( index++ ) + '"></div>').attr({'data-name':content,'data-type':containerDiv}).appendTo(targetDiv);
        var newToDoListElement = ui.draggable.clone().removeClass().appendTo(newRolesDiv);
        $('<div/>').text(' add todos for ' + content + ' here').appendTo(newRolesDiv);
      }
    }
  });
// click function to slideup and slidedown todos
  $('#todos').delegate('.expand','click', function() {
    var $target = $(this).siblings('.todo'); 
    if ($target.children().length) {
      $target.slideToggle(400);
      if ($(this).attr('src') === 'images/minus.png') {
        $(this).attr('src','images/plus.png');
      } else {
        $(this).attr('src','images/minus.png');
      }
    }
  });
  // event to append and delete the cross icon image whenever mouse entere or leaves the desired employee div
  $('.role').delegate('li',{
    'mouseenter':function() {
   (newImgDiv).attr('src','../eval/images/icon_wrong.png').addClass('position').appendTo($(this));
     } ,
    'mouseleave':function() {
      $(this).find('img').removeClass().remove();
     }
});

  // clicking cancel image
  $('#roles').delegate('img[src="../eval/images/icon_wrong.png"]','click',function() {
   $this = $(this);
   var parentDiv = $this.closest('div').attr('data-name');
   var roleDiv = $this.closest('div').attr('data-type');
   if (confirm("Do you really want to delete  from this list")) {
     $('div[data-name = "'+ parentDiv + '"][data-type = "' + roleDiv + '"]').remove();
    }
  });
});

var employee = function(data) {
  this.displayEmployee = function() {
    for(var i = 0; i < data.length; i++) {
      ($('<li/>').text(data[i].name)).addClass('employees').appendTo('#myList');
    }
  }
  this.displayRoles = function () {
    var key;
    for (key in data) {
      if (data.hasOwnProperty(key)){  
        for(var i = 0; i < data[key].length; i++) {
          var newRolesDiv= $('#rolesdiv').clone();
          $(newRolesDiv).removeClass('hidden').attr('id',key).children('.roles').text(data[key][i].type);
          $('#roles').append(newRolesDiv);
        }    
      }
    }
  }
  this.displayTodo = function () {
    var key;
    for (key in data){
      if (data.hasOwnProperty(key)){  
        for(var i = 0; i < data[key].length; i++){
         var newTodoDiv=$('#tododiv').clone();
          $(newTodoDiv).removeClass('hidden').attr('id',key+'Todo').children('span').text(data[key][i].type).siblings('.todo').attr('class','todo '+ key);
          $('#todos').append(newTodoDiv);
        }
      }
    }
  }
}






