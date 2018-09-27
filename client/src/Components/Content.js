import React, { Component } from 'react';
import {connect} from 'react-redux';
import Article from './Article';

class Content extends Component {

	render() {
		return (
			<div className="row">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">List of Articles</h3>
					</div>
					<div className="panel-body">
						<ul className="list-group">
							{this.props.articles.map(item => (
								<Article article={item} key={item._id} />
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;