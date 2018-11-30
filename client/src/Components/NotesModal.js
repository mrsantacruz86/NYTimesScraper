import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleArticleDetails } from '../actions/articlesActions';
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	ListGroup,
	ListGroupItem,
	ListGroupItemHeading,
	ListGroupItemText,
	Form,
	FormGroup,
	Label,
	Input,
	Row,
	Col
} from 'reactstrap';

class NotesModal extends Component {
	state = {
		text: ""
	}
	toggle = () => {
		this.props.toggleArticleDetails();
	}
	onChange = (e) => {
		e.preventDefault();
	}
	onSubmit = (e) => {
		e.preventDefault();
	}

	render() {
		const {
			_id, notes, link, title, summary, saved
		} = this.props.articles.selectedArticle;
		return (
			<div>
				<Modal size="lg" isOpen={this.props.articles.articleDetailModal} toggle={this.toggle} className="notes-modal">
					<ModalHeader toggle={this.toggle}>Article: {_id}</ModalHeader>
					<ModalBody>
						<Row>
							<Col>
								<Form inline>
									<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
										<Label for="exampleEmail" className="mr-sm-2">Email</Label>
										<Input type="text" name="email" id="exampleEmail" placeholder="something@idk.cool" />
									</FormGroup>
									<Button>Submit</Button>
								</Form>
							</Col>
						</Row>

						<ListGroup>
							{notes && notes.length > 0 ?
								notes.map(note =>
									<ListGroupItem>
										<ListGroupItemHeading>
											{note.date}
										</ListGroupItemHeading>
										<ListGroupItemText>
											{note.text}
										</ListGroupItemText>
									</ListGroupItem>
								)
								:
								<p>There are no Notes to Display at this time</p>
							}
						</ListGroup>
					</ModalBody>
					<ModalFooter>
						<Button
							color="secondary"
							onClick={this.toggle}
						>
							Cancel
						</Button>
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