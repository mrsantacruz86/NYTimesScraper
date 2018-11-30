import React, { Component } from 'react';

class Header extends Component {

	render() {
		return (
			<div>
				<header className="parallax-bg bg1">
					<div className="jumbotron page-banner">
						<div className="container-fluid">
							<h1 className="text-center custom-title display-4">NEWS SCRAPER</h1>
							<h1 className="text-center custom-title">New York Times</h1>
							<br />
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default Header;