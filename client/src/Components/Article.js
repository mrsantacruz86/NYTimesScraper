import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
	Button
} from 'reactstrap';
import {
	saveArticle,
	deleteArticle,
	getArticleDetails
} from '../actions/articlesActions';

class Article extends Component {

	onDelete = () => {
		this.props.deleteArticle(this.props._id)
	}
	onSave = () => {
		this.props.saveArticle(this.props._id);
	}
	toggle = () => {
		this.props.getArticleDetails(this.props._id);
	}

	render() {
		const {
			_id,
			link,
			title,
			summary,
			saved
		} = this.props;
		return (
			<ListGroupItem data-_id={_id}>
				<ListGroupItemHeading>
					<a className="article-link" href={link} target="_blank">
						<h4 className="list-group-item-heading">{title} </h4>
					</a>
				</ListGroupItemHeading>
				<ListGroupItemText className="article-summary">
					<p>{summary}</p>
					{
						!saved ?
							<div>
								<Button
									color="primary"
									size="sm"
									className={`btn-save`}
									onClick={this.onSave}
								>
									Save
								</Button>
							</div>
							:
							<div>
								<Button
									color="primary"
									size="sm"
									onClick={this.toggle}
								>
									Notes
								</Button>
								{"  "}
								<Button
									color="danger"
									size="sm"
									className={`btn-delete`}
									onClick={this.onDelete}
								>
									Delete
							</Button>
							</div>
					}
				</ListGroupItemText>
			</ListGroupItem>
		);
	}
}
const mapStateToProps = state => ({ ...state });

export default connect(
	mapStateToProps,
	{ saveArticle, deleteArticle, getArticleDetails }
)(Article);