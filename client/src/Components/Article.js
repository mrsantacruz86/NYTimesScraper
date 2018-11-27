import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import NotesModal from './NotesModal';
import { saveArticle, deleteArticle } from '../redux/actions/articlesActions';

class Article extends Component {

	onDelete = id => {
		this.props.deleteArticle(id)
	}

	render() {
		return (
			<ListGroupItem data-_id={this.props._id}>
				<ListGroupItemHeading>
					<a className="article-link" href={this.props.link} target="_blank">
						<h4 className="list-group-item-heading">{this.props.title} </h4>
					</a>
				</ListGroupItemHeading>
				<ListGroupItemText className="article-summary">
					<p>{this.props.summary}</p>
					{
						!this.props.saved ?
							<div>
								<Button
									color="primary"
									size="sm"
									className={`btn-save`}
									onClick={() => this.props.saveArticle(this.props._id)}
								>
									Save
								</Button>
							</div>
							:
							<div>
								<NotesModal 
									className="notes-modal"
									articleId={this.props._id}
								/>
								{"\t"}
								<Button
									color="danger"
									size="sm"
									className={`btn-delete`}
									onClick={this.onDelete.bind(this, this.props._id)}
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