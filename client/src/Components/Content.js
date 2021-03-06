import React, { Component } from 'react';
import NotesModal from './NotesModal';
import {
	Container,
	Row,
	ListGroup
} from 'reactstrap';
import Article from './Article';

class Content extends Component {

	render() {

		return (
			<Row>
				<Container>
					{this.props.data.length > 0 ?
						<h2>List of Articles</h2> :
						<h2>There is no articles to show</h2>
					}
					<ListGroup>
						{this.props.data.map((item, i) => (
							<Article currentArticle={item} key={i} index={i} />
						))}
					</ListGroup>
					<NotesModal />
				</Container> 
			</Row>
		);
	}
}

export default Content;