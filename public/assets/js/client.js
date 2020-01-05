$(function() {
  $(".change-devoured").on("click", function(event) {
    let id = $(this).data("id");
    let devoured = $(this).data("devoured");

    let isDevoured = {
      devoured: 1
    };

    if (!devoured) {
      alert("This burger has already been eaten!");
    } else {
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(function() {
        location.reload();
      });
    }
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burger")
        .val()
        .trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });
});
