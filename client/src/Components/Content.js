import React, { Component } from 'react';
import {
	Card, Row, CardBody, CardTitle, CardText, ListGroup
} from 'reactstrap';
import Article from './Article';

class Content extends Component {

	render() {

		return (
			<Row>
				<Card>
					<CardBody>
						<CardTitle>List of Articles</CardTitle>
						<CardText>
							<ListGroup>
								{this.props.articles.map(item => (
									<Article {...item} key={item._id} />
								))}
							</ListGroup>
						</CardText>
					</CardBody>
				</Card>
			</Row>
		);
	}
}

export default Content;