import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncSaveArticle } from '../redux/actions/articlesActions';

class Article extends Component {

	render() {
		return (
			<li className="list-group-item" data-_id={this.props._id}>
				{
					!this.props.saved ?
						<div>
							<button
								type="button"
								className={`btn btn-sm btn-success btn-save`}
								// onClick={() => this.props.onSaveArticle(this.props._id)}
								onClick={() => {
									console.log("the save button has been clicked", this.props._id);
									this.props.onSaveArticle(this.props._id);
								}}
							>
								Save
							</button>
						</div>
						:
						<div>
							<button
								type="button"
								className={`btn btn-sm btn-prpmary btn-notes`}
								// onClick={() => ...}
							>
								Notes
							</button>
							<button
								type="button"
								className={`btn btn-sm btn-danger btn-delete`}
								// onClick={() => ...}
							>
								Delete
							</button>
						</div>
				}
				<a className="article-link" href={this.props.link} target="_blank">
					<h4 className="list-group-item-heading">{this.props.title} </h4>
				</a>
				<p className="article-summary list-group-item-text">{this.props.summary}</p>
			</li>
		);
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSaveArticle: (id) => {
			return () => {
				console.log("Save action Fired");
				return dispatch(asyncSaveArticle(id));
			};
		}
	};
};

export default connect(mapDispatchToProps)(Article);