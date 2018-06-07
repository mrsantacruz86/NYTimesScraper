// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
	$("#btn-scrape").click(function() {
		$.get("/scrape",function(data){
			console.log(data);
			alert("scraped");
			}
		);
	});
	
	// $(".delete-burger").on("click", () => {
	// 	var id = $(this).attr("data-id");
		
	// 	// Send the DELETE request.
	// 	$.ajax("/api/burgers/" + id, {
	// 		type: "DELETE"
	// 	}).then(
	// 		function () {
	// 			console.log("deleted burger", id);
	// 			// Reload the page to get the updated list
	// 			location.reload();
	// 		}
	// 	);
	// });
	
});

$('ul li').on("click", "#btn-save", () => {
	let article = {
		title: req.body.title,
		link: req.body.link,
		summary: req.body.summary
	}

	$.ajax("/articles/add", {
		type: "POST",
		data: article
	}).then(
		function () {
			console.log("Created new burger\n", newBurger);
			// Reload the page to get the updated list
			location.reload();
		}
	);
});