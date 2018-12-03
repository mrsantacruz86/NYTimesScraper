import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNote, toggleNotesModal, deleteNote } from '../actions/notesActions';
import moment from 'moment';
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
	componentDidMount = () => {

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
		if (this.state.text && this.state.text.length > 0) {
			const note = {
				_articleId: this.props.notes.selectedArticle._id,
				text: this.state.text
			}
			this.props.addNote(note);
			this.setState({ text: "" });
		}
	}
	onDelete = (id) => {
		this.props.deleteNote(id);
	}
 
	render() {
		const notes  = this.props.notes.notesList;
		const article  = this.props.notes.selectedArticle;
		return (
			<div>
				<Modal
					size="lg"
					isOpen={this.props.notes.modal}
					toggle={this.toggle}
					className="notes-modal"
				>
					<ModalHeader toggle={this.toggle}>
						<Row>
							<Col>
								Article: {article._id}
							</Col>
						</Row>
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.onSubmit} >
							<Row>
								<Col>
									<FormGroup className="mb-2 mr-sm-2 mb-sm-0">
										<Label for="noteInput" hidden >Note</Label>
										<Input type="textarea"
											name="text"
											id="noteInput"
											placeholder="Add a note here..."
											onChange={this.onChange}
											value={this.state.text}
										/>
									</FormGroup>
								</Col>
							</Row>
							<Row>
								<Col style={{ marginTop: 10 }}>
									<Button color="success" outline>Add Note</Button>
								</Col>
							</Row>
						</Form>
						<hr />
						<Row>
							<Col>
								<ListGroup>
									{notes && notes.length > 0 ?
										notes.map((note, index) =>
											<ListGroupItem key={index}>
												<ListGroupItemHeading>
													<Button
														outline
														color="danger"
														onClick={this.onDelete.bind(this,note._id)}
													>
														<i className="fas fa-trash-alt"></i>
													</Button>
													{moment(note.date).format("MM/DD/YYYY hh:mm:ss")}
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
							color="dark"
							outline
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
	{ toggleNotesModal, addNote, deleteNote }
)(NotesModal);