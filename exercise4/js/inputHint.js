//creating an input hint
// 1. Set the value of the search input to the text of the label element
var label = $("label[for='q']");
labelText = label.text();
var searchInput = $('input[name="q"]');
searchInput.val(labelText);
//2.Add a class of "hint" to the search input
searchInput.addClass('hint');
//3. Remove the label element
label.remove();
//4.Bind a focus event to the search input that removes the hint text and the "hint" class
//5.Bind a blur event to the search input that restores the hint text and "hint" class if no search text was entered
searchInput.bind('focus blur' ,function(e) {
  var $this = $(this);
  $this.toggleClass('hint');
  if(e.type == 'blur'&& $this.val() == '') {
    $this.val(labelText);
  }
  else {
    if($this.val() == labelText) {
      $this.val("");
    }
  }
});

