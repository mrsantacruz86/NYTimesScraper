import React, { Component } from 'react';
import Article from './Article';

class Content extends Component {

	render() {
		const { articles, filter } = this.props;
		// console.log(filterSaved);
		var filteredList = articles.filter(article => {
			return article.saved === filter;
		});
		// console.log(filteredList);

		return (
			<div className="row">
				<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">List of Articles</h3>
					</div>
					<div className="panel-body">
						<ul className="list-group">
							{
								filteredList.map(item => (
									<Article {...item} key={item._id} />
								))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Content;