import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import NotesModal from './NotesModal';
import { saveArticle, deleteArticle } from '../redux/actions/articlesActions';

class Article extends Component {

	onDelete = () => {
		this.props.deleteArticle(this.props._id)
	}
	onSave = () => {
		this.props.saveArticle(this.props._id);
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
								<NotesModal 
									className="notes-modal"
									articleId={_id}
								/>
								{"\t"}
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
	{ saveArticle, deleteArticle }
)(Article);