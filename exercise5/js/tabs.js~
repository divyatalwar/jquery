$(document).ready(function() {
  var $module = $('div.module');
  //1 Hide all of the modules
  $module.hide();
  //2.Create an unordered list element before the first module.
  $list = $("<ul id='newlist'></ul>");
  $list.insertBefore($module.eq(0));
  //3.Iterate over the modules using $.fn.each. For each module, use the text of the h2 element as the text for a list item that you add to   the unordered list element.
  $module.each(function( index ) {
    var $currentDiv=$(this);
    $content = $currentDiv.find('h2').text();
    $listItem = $("<li> " + $content + "</li>").appendTo($list);
    //4.Bind a click event to the list item that:Shows the related module, and hides any other modules , Adds a class of "current" to the clicked list item , Removes the class "current" from the other list item
    $listItem.click(function( e) {
      $(this).addClass('current').siblings().removeClass('current');
      $currentDiv.show();
      $module.not($currentDiv).hide();
    });
 });
  $module.eq(0).show();
  $list.children('li:first').addClass('current');                          //since the selected tab has a class current
});

