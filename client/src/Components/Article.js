import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { asyncSaveArticle } from '../redux/actions/articlesActions';

class Article extends Component {

	render() {
		return (
			<li className="list-group-item" data-_id={this.props._id}>
				{
					!this.props.saved ?
						<div>
							<button type="button"
								className="btn btn-sm btn-success btn-save"
								// onClick={asyncSaveArticle(this.props._id)}
							>
								Save Article
						</button>
						</div>
						:
						<div>
							<button type="button"
								className="btn btn-sm btn-primary btn-notes"
								// onClick={this.props.handleNotes}
							>
								Article Notes
							</button>
							<button type="button"
								className="btn btn-sm btn-danger btn-delete"
								// onClick={this.props.handleDelete}
							>
								Remove
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
		onSaveArticle: bindActionCreators(asyncSaveArticle, dispatch)
	};
};

export default connect(mapDispatchToProps)(Article);