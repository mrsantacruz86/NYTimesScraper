import React, { Component } from 'react';

class Article extends Component {
	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleSave = this.handleSave.bind(this);
		this.handleNotes = this.handleNotes.bind(this);
	}
	handleDelete(e) {

	}

	handleSave(e) {

	}

	handleNotes(e) {

	}

	render() {
		return (
			<li className="list-group-item" data-_id={this.props.articleId}>
				{
					!this.props.article.saved ?
						<div>
							<button type="button"
								className="btn btn-sm btn-success btn-save"
								data-_id={this.props.article._id}>
								Save Article
						</button>
						</div>
						:
						<div>
							<button type="button"
								className="btn btn-sm btn-primary btn-notes"
								data-_id={this.props.article._id}>
								Article Notes
							</button>
							<button type="button"
								className="btn btn-sm btn-danger btn-delete"
								data-_id={this.props.article._id}>
								Remove
							</button>
						</div>


				}
				<a className="article-link" href={this.props.article.link} target="_blank">
					<h4 className="list-group-item-heading">{this.props.article.title} </h4>
				</a>
				<p className="article-summary list-group-item-text">{this.props.article.summary}</p>
			</li>
		)
	}
}

export default Article;