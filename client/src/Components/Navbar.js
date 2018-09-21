import React, { Component } from 'react';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleScrape = this.handleScrape.bind(this);
	}

	handleScrape(e) {
		this.props.handleScrape();
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
								<li className={window.location.pathname === "/" ? "nav-item active" : "nav-item"}>
									<a href="/">Home
              <span className="sr-only">(current)</span>
									</a>
								</li>
								<li className={window.location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
									<a href="/saved">Saved Articles</a>
								</li>
								<li>
									<button className="btn btn-danger" id="btn-scrape" onClick={this.props.handleScrape}>Scrape New Articles</button>
								</li>
							</ul>

						</div>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar;