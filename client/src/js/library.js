// -------------------------------------------------
// Funcion Library
// -------------------------------------------------

function initPage() {
	articleContainer.empty();
	$.get("/saved").then(function (data) {
		if (data && data.length) {
			renderArticles(data);
		} else {
			renderEmpty();
		}
	})
}

function handleArticleSave() {
	let articleToSave = $(this).data();
	articleToSave.saved = true;
	console.log(articleToSave);
	$.ajax({
		method: "PATCH",
		url: "/api/articles",
		data: articleToSave
	}).then(data => {
		if (data.ok) {
			// console.log(data);
			$(this).parents('li').remove();
		}
	});
}

function handleArticleScrape() {
	// 	// This function handles the user clicking any "scrape new article" buttons
	$.get("/api/scrape").then(function (data) {
		console.log(JSON.stringify(data));
		if (data) {
			alert(data.message);
		} else {
			alert("An error occurec while trying to retrieve the data");
		}
	});
}

function createPanel(article) {
	var listItem = $('<li class="list-group-item">');
	listItem.data('_id', article._id);
	var btnSave = $('<button type="button" class="btn btn-sm btn-success btn-save">');
	btnSave.text('Save Article').appendTo(listItem);
	var link = $('<a class="article-link">');
	link.attr('href', article.link)
		.append('<h4 class="list-group-item-heading">').html(article.title)
		.appendTo(listItem);
	var summary = $('<p class="article-summary list-group-item-text">');
	summary.text(article.summary).appendTo(listItem);
	return listItem;
}
function renderArticles(articlesList) {
	var list = $('ul.list-group').empty();
	articlesList.forEach(article => {
		list.append(createPanel(article));
	});

}
function initPage(route) {
	articleContainer.empty();
	$.get(route).then(function (data) {
		if (data && data.length) {
			renderArticles(data);
		} else {
			renderEmpty();
		}
	})
}

function renderEmpty(){
	var emptyAlert = 
	$([
		'<div class="alert alert-warning text-center">',
		'<h4>Sorry! Looks like we don\'t have any saved aarticle.</h4>',
		'</div>',
		'<div class="panel panel-default">',
		'<div class="panel-heading text-center">',
		'<h3>Would you Like to browse for some articles.</h3>',
		'</div>',
		'<div class="panel-body text-center">',
		'<h4><a href="/">Browse Articles</a></h4>',
		'</div>',
		'</div>'
	].join(""));
	articleContainer.append(emptyAlert)
}
