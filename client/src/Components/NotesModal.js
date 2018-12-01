import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleNotesModal } from '../actions/notesActions';
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
		this.props.toggleNotesModal();
	}
	onChange = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.name]: e.target.value
		});
	}
	onSubmit = (e) => {
		e.preventDefault();
		this.setState({text:""});
	}

	render() {
		const {
			_id, notes, link, title, summary, saved
		} = this.props.notes.selectedArticle;
		return (
			<div>
				<Modal size="lg" isOpen={this.props.notes.modal} toggle={this.toggle} className="notes-modal">
					<ModalHeader toggle={this.toggle}>
						<Row>
							<Col>
								Article: {_id}
							</Col>
						</Row>
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit} >
							<Row>
								<Col>
									<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
										<Label for="noteInput" hidden >Note</Label>
										<Input type="textarea" name="text" id="noteInput" placeholder="Add a note here..." onChange={this.onChange} value={this.state.text} />
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col style={{marginTop: 10}}>
									<Button>Add Note</Button>
								</Col>
							</Row>
						</Form>
						<hr />
						<Row>
							<Col>
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
							</Col>
						</Row>
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
	{ toggleNotesModal }
)(NotesModal);