// Make sure we wait to attach our handlers until the DOM is fully loaded.


// $(document).ready(function() {
// 	console.log("SCRIPT.JS LOADED");
// });

// // Initialize modals
// $(document).ready(function () {
//   // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
//   $('.modal').modal();
// });

// $(".btn-devour").click(function (e) { 
//   e.preventDefault();
//   $("#devour-form").attr("action", "/" + $(this).attr("data-id") + "?_method=PUT");
// });
$(document).ready(function(){

	$( ".create-update-form" ).on("submit", (function(event) {
      event.preventDefault();
      var newBurger = burger_name: $("#text").val().trim()
      console.log(newReservation);

});

	$( ".input-group-btn" ).on("submit", (function(event){
	event.preventDefault();
    get.put 

    ///ajax connection

   //append to the devoured section 
   //update db to devoured  


	});









});
	
// $(".col-md-offset-1").on("submit", function(event) {

//     // Make sure to preventDefault on a submit event.
//      event.preventDefault();

//      var newBurger = {
//        name: $("#burger_name").val().trim(),
//      };

//     // Send the POST request.
//     $.ajax("/burgers/create", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
