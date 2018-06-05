// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
	$("#scrape-articles").on("click", (event) => {
		// Send the PUT request.
		$.get("/scrape",(data) => {
				console.log(data);
			}
		);
	});

	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		var newBurger = {
			name: $("#burgerInput").val().trim(),
		};

		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(
			function () {
				console.log("created new burger", newBurger);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".delete-burger").on("click", function (event) {
		var id = $(this).attr("data-id");

		// Send the DELETE request.
		$.ajax("/api/burgers/" + id, {
			type: "DELETE"
		}).then(
			function () {
				console.log("deleted burger", id);
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});
	
});
