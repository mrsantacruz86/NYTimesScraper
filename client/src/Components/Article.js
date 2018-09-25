import React, { Component } from 'react';
import {connect} from 'react-redux';

class Article extends Component {

	render() {
		return (
			<li className="list-group-item" data-_id={this.props.articleId}>
				{
					!this.props.article.saved ?
						<div>
							<button type="button"
								className="btn btn-sm btn-success btn-save"
								data-_id={this.props.article._id}
								onClick={this.props.handleSave}
							>
								Save Article
						</button>
						</div>
						:
						<div>
							<button type="button"
								className="btn btn-sm btn-primary btn-notes"
								data-_id={this.props.article._id}
								onClick={this.props.handleNotes}
								>
								Article Notes
							</button>
							<button type="button"
								className="btn btn-sm btn-danger btn-delete"
								data-_id={this.props.article._id}
								onClick={this.props.handleDelete}
								>
								Remove
							</button>
						</div>


				}
				<a className="article-link" href={this.props.article.link} target="_blank">
					<h4 className="list-group-item-heading">{this.props.article.title} </h4>
				</a>
				<p className="article-summary list-group-item-text">{this.props.article.summary}</p>
			</li>
		);
	}
}


const mapDispatchToProps = (dispatch) => {
	console.log("mapDispatchToProps");
	return {
		handleSave: () => {
			const action = { type: "SAVE" };
			dispatch(action);
		},
		handleNotes: () => {
			const action = { type: "NOTES" };
			dispatch(action);
		},
		handleDelete: () => {
			const action = { type: "DELETE" };
			dispatch(action);
		}
	};
};

export default connect(mapDispatchToProps)(Article);