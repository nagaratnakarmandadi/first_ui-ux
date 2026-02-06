
$(document).ready(function () {

  console.log("JS loaded");

  $(document).click(function () {
    $("h1").css("color", "red");
  });

  $(document).keydown(function (event) {
    $("h1").text(event.key);
  });

  $(document).on("click", function() {
    $("h1").css("color", "green");

  })

});
