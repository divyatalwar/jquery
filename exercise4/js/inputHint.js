//creating an input hint
$(document).ready(function() {
  // 1. Set the value of the search input to the text of the label element
  var label = $("label[for='q']");
  var labelText = label.text();
  var searchInput = $('input[name="q"]');
  searchInput.val(labelText);
  //2.Add a class of "hint" to the search input
  searchInput.addClass('hint');
  //3. Remove the label element
  label.remove();
  //4.Bind a focus event to the search input that removes the hint text and the "hint" class
  //5.Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
  searchInput.bind('focus', function() {
  if ($(this).val() == labelText && $(this).hasClass('hint')) {
      $(this).val('').removeClass('hint');
    }
	})
	.bind('blur', function() {	 
	  if($(this).val().trim()=="") {
      $(this).val(labelText).addClass('hint');
    }      
  });
});
