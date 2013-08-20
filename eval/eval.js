$(document).ready(function() {
  var jsonEmployees = [{'name':'akhil'},{'name':'HK'},{'name':'waseem'},{'name':'alok'},{'name':'Rd'}]
  var jsonRole = { 'ROR' : [{ 'type' : 'ROR Developer' }], 'Android' : [{ 'type' : 'Android Developer ' }] ,'Jquery' : [{ 'type' : 'Jquery Developer' }]};
  var employeeDiv = new employee(jsonEmployees);
  employeeDiv.displayEmployee();
  var rolediv = new employee(jsonRole);
  rolediv.displayRoles();
  rolediv.displayTodo();
  newImgDiv = ($('<img>').attr('src','../eval/images/icon_wrong.png'));
  wrongIconImage = 'img[src="../eval/images/icon_wrong.png"]';  
   //implementing the draggable UI
   $('.employees').draggable({
    revert : 'invalid'  ,
    helper : 'clone',
    opacity : 0.5,

  });
  //implementing the droppable UI
  $('.role').droppable({
    drop : function(event, ui) {
      var $this = $(this);
      var content = ui.draggable.text();
      var containerDiv = $this.attr('id');
      var repeatedClass = $this.find('div[data-name='+ content+']');
      if (!repeatedClass.length) {
        var newLiDiv = createDiv(content, containerDiv, content).appendTo($this);                  //creating a new Li div
        var targetDiv = $('#todos .' + containerDiv );                                            //finding the target Div          
        var newRolesDiv = createDiv(content, containerDiv, content).appendTo(targetDiv);          // creating a new Roles div
        addTodoDiv(content).appendTo(newRolesDiv);                                      
      }
    }
  });
   // a clickable event attached to the image for adding new task for a particular employee
   $('#todos').delegate('img.addnewTask','click',function(){
    $this = $(this);
    var newDiv = $('<div/>');
    createInputField().appendTo(newDiv);                                                           // creating a text field
    addSaveImage().appendTo(newDiv);                                                               // adding a save image icon
    addDeleteImage().appendTo(newDiv);                                                             // adding a delete image icon
    ($this.siblings('span.addtodo')).text('').parent('div').append(newDiv);
    // if number of task turns greater than 3 add a scrollbar
    if ($this.siblings('div').length > 3) {
      $this.parent('.addtodo').addClass('overflow');
    } else {
      $this.parent('.addtodo').removeClass('overflow');
    }    
  });
  // event to perform save operation on an employee's task
 $('#todos').delegate( 'img.save','click',function(){
    $this = $(this);
    var inputField = $this.siblings('input');
    var ToDoval = inputField.val();
    var saveField = $('<div>').text(ToDoval).addClass('newbox');
    (inputField).replaceWith(saveField);
    ($this).replaceWith(addEditImage());
  });
  // event to perform edit operation on an employee's task
  $('#todos').delegate('img.edit','click',function(){
    $this = $(this);
    var divElement = $(this).siblings('div');
    var editField = $('<input type="text">').val(divElement.text()).attr('size',"25").addClass('inputTextBox');
    (divElement).replaceWith(editField);
    ($this).replaceWith(addSaveImage());
  });
  // event to slide up and down the outer todo div
  $('#todos').delegate('img.outer','click',function() {
    if ($(this).attr('src') == 'images/plus.png') {
      $('#todos div').slideDown();
    } else {
      $('#todos div').slideUp();
    }
  });
  // event to perform delete operation for a employees'stask
  $('#todos').delegate(' img.delete','click',function(){
    $this = $(this);
    // if the task to be deleted is the last task for that employee then replace it with the original text for employee
    if ($this.parent().siblings('div, input').length == 0) {
      var Element = $this.parents('.addtodo');
      var name = Element.siblings('li').text();
      $this.parents('.addtodo').prepend(spanText.text('add todos for '+ name))
    }
    $this.parent('div').remove();
  });
  // event for performing search for a particular employee.highlighting it and hiding all other roles that dont contain the employee
  $('button').click(function(){
    var searched_Item = $('#search').val();
    $('#roles div ').each(function(){
      $this = $(this);
      $targetDiv = $this.find('div[data-name="' +searched_Item+'"]');
      if ($targetDiv.length) {
        $this.find($targetDiv).css("background-color", "#FFFF9C").animate({ backgroundColor: "#cfcfcf"}, 1500);
       }
      else {
        $this.children('div[data-name]').slideUp();
      }
    });
  });
  // click function to slideup and slidedown each individual todos
  $('#todos').delegate('.expand','click', function() {
    var $this = $(this); 
    var $target = $this.siblings('.todo'); 
    if ($target.children().length) {
      $target.slideToggle(400);
      if ($this.attr('src') === 'images/minus.png') {
        $this.attr('src','images/plus.png');
      } else {
        $this.attr('src','images/minus.png');
      }
    }
  });
  // event to append and delete the cross icon image whenever mouse entere or leaves the desired employee div
  $('.role ').delegate('li',{
    'mouseenter':function() {
      myImage = addImage();
      myImage.addClass('position').appendTo($(this));
     } ,
    'mouseleave':function() {
      $(this).find('img').removeClass().remove();
     }
});

   $('#myList ').delegate('li',{
    'mouseenter':function() {
      myImage = addImage();
      myImage.addClass('EmployeePosition').appendTo($(this));
     } ,
    'mouseleave':function() {
      $(this).find('img').remove();
     }
});
 // event to dlete the required employee from the list of roles assigned by clicking on cross icon
  $('#roles').delegate(wrongIconImage,'click',function(e) {
    $this = $(this);
    var parentDiv = $this.closest('div').attr('data-name');
    var roleDiv = $this.closest('div').attr('data-type');
    if (confirm("Do you really want to delete  from this list")) {
      $('div[data-name = "'+ parentDiv + '"][data-type = "' + roleDiv + '"]').remove();
    }
  });
//event to delete the employee from the entir employee list
$('#myList').delegate(wrongIconImage,'click',function(e) {
   $this = $(this);
   var employeeName = $(this).closest('li').text();
   if (confirm("Do you really want to delete  from this list")) {
     $('[data-name = "'+ employeeName + '"]').remove();
    }
  });
  //function to add a new image attribute
  function addImage() {
    return newImgDiv.clone();  
  }
  //function to create a new input field 
  function createInputField () {
   return $('<input type="text">').val("Add a new todo here").attr('size',"25").addClass('inputTextBox'); 
  }
  //function to add a save icon
  function addSaveImage() {
    return $('<img>').attr('src','../eval/images/save.jpg').addClass('save');
  }
  //function to add a delete icon
  function addDeleteImage() {
    return $('<img>').attr('src','../eval/images/icon_wrong.png').addClass('delete');
  } 
  //function to add a edit icon
  function addEditImage() {
    return $('<img>').attr('src','../eval/images/edit.jpg').addClass('edit');
  }
 
  function createDiv(content,containerDiv,draggedElement) {
    return $('<div/>').attr({'data-name':content,'data-type':containerDiv}).append($('<li>').text(draggedElement));
  }
  //function to create a todo div
  function addTodoDiv (content) {
    var addTodo = $('<div class ="addtodo">');
    spanText = ($('<span class ="addtodo">')).appendTo(addTodo).text(' add todos for ' + content + ' here');
    $('<img>').attr('src','../eval/images/plus.png').addClass('addnewTask').appendTo(addTodo);
    return addTodo;
  }
});

var employee = function(data) {
  this.displayEmployee = function() {
    for(var i = 0; i < data.length; i++) {
      ($('<li/>').attr('data-name',data[i].name).text(data[i].name)).addClass('employees').appendTo('#myList');
    }
  }
  this.displayRoles = function () {
    var key;
     for (key in data){
      if (data.hasOwnProperty(key)){  
        for(var i = 0; i < data[key].length; i++){
          var $newDiv =$('<div>').attr({'id' : key , 'class': 'role'});
          var $newRolesDiv = $('<div>').addClass('roles').text(data[key][i].type);
          ($newRolesDiv).appendTo($newDiv)
          $('#roles').append($newDiv);
        }
      }
    }
  }
  this.displayTodo = function () {
    var key;
    for (key in data){
      if (data.hasOwnProperty(key)){  
        for(var i = 0; i < data[key].length; i++){
         var newDiv =$('<div>').attr({'id' : key+'Todo', 'class': 'todos'});
         var $newTodoDiv = $('<span>').text(data[key][i].type).appendTo(newDiv);
         var newImage = $('<img>').attr('src',"../eval/images/minus.png").addClass('expand').appendTo(newDiv)
         var taskDiv = $('<div>').addClass('todo '+key).appendTo(newDiv);
          $('#todos').append(newDiv);
        }
      }
    }
  }
}






