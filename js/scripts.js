$(document).ready(function () {
  function addItem() {   // add new item
    let newItemText = $("#input").val().trim();

    if (newItemText === '') {
      alert("You must write something!");
      return;
    }

    let listItem = $('<li></li>').text(newItemText);
    let deleteButton = $('<button class="delete">X</button>');

    listItem.append(deleteButton);
    $("#list").append(listItem);

    listItem.on("dblclick", function () {   // event listener for double-click to cross out an item
      $(this).toggleClass("strike");
    });

    deleteButton.on("click", function () {   // event listener for delete button
      listItem.remove();
    });

    $("#input").val('');   // clear input field
  }

  $('#button').on("click", addItem); // Attach the click event to the "Add" div

  $('#list').sortable();   // change the order of items
});