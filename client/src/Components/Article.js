import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';
import { asyncSaveArticle, asyncDeleteArticle } from '../redux/actions/articlesActions';

class Article extends Component {

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
									onClick={() => this.props.asyncSaveArticle(this.props._id)}
								>
									Save
								</Button>
							</div>
							:
							<div>
								<Button
									color="secondary"
									size="sm"
									className={`btn-notes`}
									onClick={() => console.log("Click on Notes: " + this.props._id)}
								>
									Notes
								</Button> 
								{"\t"}
								<Button
									color="danger"
									size="sm"
									className={`btn-delete`}
									onClick={() => this.props.asyncDeleteArticle(this.props._id)}
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
	{ asyncSaveArticle, asyncDeleteArticle }
)(Article);