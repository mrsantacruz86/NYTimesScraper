$(document).ready(function () {
	var articleContainer = $('ul.list-group');

	$(document).on("click", 'btn.delete', handleArticleDelete);
	$(document).on("click", 'btn.notes', handleArticleNotes);
	$(document).on("click", 'btn.save', handleNoteSave);
	$(document).on("click", 'btn.note-delete', handleNoteDelete);

	initPage("/saved");
});