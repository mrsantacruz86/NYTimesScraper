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
} from '../actions/articlesActions';
import { getNotes, toggleNotesModal } from '../actions/notesActions'

class Article extends Component {

	onDelete = () => {
		this.props.deleteArticle(this.props.currentArticle._id)
	}
	onSave = () => {
		this.props.saveArticle(this.props.currentArticle._id);
	}
	toggleNotes = () => {
		this.props.toggleNotesModal();
		this.props.getNotes(this.props.currentArticle);
	}

	render() {
		const {
			_id,
			link,
			title,
			summary,
			saved,
		} = this.props.currentArticle;
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
									outline
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
									outline
									size="sm"
									onClick={this.toggleNotes}
								>
									Notes
								</Button>
								{"  "}
								<Button
									color="danger"
									outline
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
	{
		saveArticle,
		deleteArticle,
		toggleNotesModal,
		getNotes
	}
)(Article);