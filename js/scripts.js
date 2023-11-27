$(document).ready(function () {
  function addItem() {   // add new item
    let newItemText = $("#input").val().trim();

    if (newItemText === '') {
      alert("You must write something!");
      return;
    }

    let newItemHTML = '<li>' + newItemText + '<button class="delete">X</button></li>';
    $('.selectedElement').append(newItemHTML);
    $("#input").val('');   // clear input field
    attachEventListeners();   // move event listeners to a separate function
  }

  function attachEventListeners() {
    $(".selectedElement li:last-child").on("click", ".delete", function () {   // event listener for delete button
      $(this).parent().remove();
    });

    $(".selectedElement li:last-child").on("dblclick", function () {   // event listener for double-click to cross out an item
      $(this).toggleClass("strike", !$(this).hasClass("strike"));
    });
  }

  $('#button').on("click", addItem);   // attach the click event to the "Add" div
  $('.selectedElement').sortable();   // change the order of items
});