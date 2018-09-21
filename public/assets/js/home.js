// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function () {
	$(document).on("click", '#btn-scrape', handleArticleScrape);
	$(document).on("click", ".btn-save", handleArticleSave);

	initPage("/");
});