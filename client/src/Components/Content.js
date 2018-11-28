import React, { Component } from 'react';
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
					{ this.props.data.length > 0 ?
						<h2>List of Articles</h2>:
						<h2>There is no articles to show</h2>					
					}
					<ListGroup>
						{this.props.data.map((item, i) => (
							<Article {...item} key={i} index={i} />
						))}
					</ListGroup>
				</Container>
			</Row>
		);
	}
}

export default Content;