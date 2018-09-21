import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (
			<div>
				<header className="parallax-bg bg1">
					<div className="jumbotron page-banner">
						<div className="container-fluid">
							<h1 className="text-center custom-title">MONGO SCRAPER</h1>
							<h2 className="text-center custom-title">New York Times Scraper</h2>
							<br />
						</div>
					</div>
				</header>
			</div>
		)
	}
}

export default Header;