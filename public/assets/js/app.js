// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
	// $(document).on("click", ".btn.btn-save", handleArticleSave);
	$('#btn-scrape').on("click", function(e){
		e.preventDefault();
		handleArticleScrape();
		console.log("I've beem clicked")
	});
});

function handleArticleSave() {
	$.ajax({
		method: "PUT",
		url: "/api/save-article",
		data: { _id: $(this).attr('data-id') }
	}).then(function (data) {
		if (data.ok) {
			console.log(data);
			$(this).parents('li').remove();
		}
	});
}

function handleArticleScrape() {
// 	// This function handles the user clicking any "scrape new article" buttons
	$.get({
		url: "/api/scrape"
	}).then(
		alert("articles already scraped")
	)
}