import React, { Component } from 'react';
import { connect } from 'react-redux';
import { scrapeArticles } from '../redux/actions/articlesActions';
import { viewSaved, viewUnsaved } from '../redux/actions/visibilityFilter';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleScrape = this.handleScrape.bind(this);
	}

	handleScrape(e) {
		e.preventDefault();
		this.props.dispatch(scrapeArticles());
	}
	handleViewSaved(e) {
		e.preventDefault();
		this.props.dispatch(viewSaved());
	}
	handleViewUnsaved(e) {
		e.preventDefault();
		this.props.dispatch(viewUnsaved());
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-inverse navbar-fixed-top">
					<div className="container-fluid">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"
								aria-expanded="false">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a className="navbar-brand" href="./">
								<i className="far fa-newspaper"></i>
							</a>
						</div>

						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li className={!this.props.articles.filterSaved ? "nav-item active" : "nav-item"}>
									<a
										onClick={(e) => this.handleViewUnsaved(e)}
									>
										Home
              			<span className="sr-only">(current)</span>
									</a>

								</li>

								<li className={this.props.articles.filterSaved ? "nav-item active" : "nav-item"}>
									<a
										onClick={(e) => this.handleViewSaved(e)}
									>
										Saved Articles
									</a>
								</li>

								<li>
									<button
										className="btn btn-danger"
										id="btn-scrape"
										onClick={(e) => this.handleScrape(e)}
									>
										Scrape New Articles
									</button>
								</li>
							</ul>

						</div>
					</div>
				</nav>
			</div>
		);
	}
}

const mapStateToProps = state => ({ ...state });
export default connect(mapStateToProps)(Navbar);