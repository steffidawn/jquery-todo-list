document.addEventListener('DOMContentLoaded', function() {

function addListItem() {
	var text = $('#inputText').val();
	$('.list').append('<li>' + '<button class="button"></button>' + text + '</li>');
	$('#inputText').val('');
	$('#inputText').focus();
	$('.button').on('click', deleteItem);
}

function deleteItem() {
	$(this).parent().remove();
}

$(function() {
	$('#submit').on('click', addListItem);
	$('.button').on('click', deleteItem);
});


})


// $("#submit").on("click", function() {
//   $("ul").append(
//     "<li class=" + listItem + ">" + " " + id + 
//     " <button class='button'></button></li>"
//   );
//   id += 1;
// });

// $("ul").on("click", "button", function(e) {
//   $(this).parent().remove(e.target.id);
// });



// $('#submit').click(function() {
//     var g = $('#newInput').val();
//     $('#list').append("<li>" + "<button></button></li>");
//     $("button").last().addClass("delete");
//     $('#newInput').focus();
//     }
// );

// });

  