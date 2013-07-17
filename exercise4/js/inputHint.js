//creating an input hint
var label = $("label[for='q']");
labelText = label.text();
var searchInput = $('input[name="q"]');
searchInput.val(labelText);
searchInput.addClass('hint');
label.remove();
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

