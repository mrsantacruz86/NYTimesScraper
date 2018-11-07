import React, { Component } from 'react';
import ActionButton from './ActionButton';

class Article extends Component {

	render() {
		return (
			<li className="list-group-item" data-_id={this.props._id}>
				{
					!this.props.saved ?
						<div>
							<ActionButton
								stl={"success"}
								text={"Save"}
								articleId={this.props._id}
							/>
						</div>
						:
						<div>
							<ActionButton
								stl={"primary"}
								text={"Notes"}
								articleId={this.props._id}

							/>
							<ActionButton
								stl={"danger"}
								text={"Delete"}
								articleId={this.props._id}
							/>
						</div>
				}
				<a className="article-link" href={this.props.link} target="_blank">
					<h4 className="list-group-item-heading">{this.props.title} </h4>
				</a>
				<p className="article-summary list-group-item-text">{this.props.summary}</p>
			</li>
		);
	}
}


export default Article;