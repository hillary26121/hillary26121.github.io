$(document).ready( function() {
  function handleScroll(){
    if ( $(document).scrollTop() > 100){
      $("#banner").addClass("shrink");
      $("#name").hide();
      $(".hide").hide();
      $("header").removeClass("page-header");
    }

    if( $(document).scrollTop() < 100){
      $("#banner").removeClass("shrink");
      $("#name").show();
      $(".hide").show();
      $("header").addClass("page-header");
    }
  }

  handleScroll();

  $(document).on("scroll", function() {
    handleScroll();
  });

  });



var textBox = $("#text-box");
var list = $("#list");

// Button Click Event

$("#add-button").click( function() {

if( textBox.val() != "" ){
  var newListItem = '<li class="list-item">' + textBox.val() + '</li>';
  list.append(newListItem);
  textBox.val("");

}
});

$(document).on("click", ".list-item", function() {
    $(this).remove();
});
