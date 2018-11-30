import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleArticleDetails } from '../redux/actions/articlesActions';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Form,
	FormGroup,
	Label,
	Input
} from 'reactstrap';

class NotesModal extends Component {
	state = {
		text: ""
	}
	toggle = () => {
		this.props.toggleArticleDetails();
	}

	render() {
		const {
			_id,
			notes,
			link,
			title,
			summary,
			saved
		} = this.props.articles.selectedArticle;
		return (
			<div>
				<Modal isOpen={this.props.articles.articleDetailModal} toggle={this.toggle} className="notes-modal">
					<ModalHeader toggle={this.toggle}>Article: {_id}</ModalHeader>
					<ModalBody>
						<ul>
							{notes && notes.length > 0 ?
								notes.map(note =>
									<li>{note.text}<br />{note.date}</li>
								)
								:
								<p>There are no Notes to Display at this time</p>
							}
						</ul>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
						<Button color="secondary" onClick={this.toggle}>Cancel</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
const mapStateToProps = state => ({ ...state });

export default connect(
	mapStateToProps,
	{ toggleArticleDetails }
)(NotesModal);