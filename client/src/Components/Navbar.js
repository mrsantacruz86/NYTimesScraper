import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Button
	// Container
} from 'reactstrap';
import { connect } from 'react-redux';
import { scrapeArticles } from '../redux/actions/articlesActions';


class AppNavbar extends Component {
	state = {
		isOpen: false
	}
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	handleScrape = (e) => {
		e.preventDefault();
		this.props.scrapeArticles();
	}

	render() {
		return (
			<div>
				<Navbar color="dark" dark expand="sm" fixed="top">
					<NavbarBrand href="/">
						<i className="far fa-newspaper"></i> NEWS SCRAPER
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink href="/unsaved">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/saved">
									Saved Articles
								</NavLink>
							</NavItem>
							<NavItem>
								{/* <NavLink> */}
								<Button
									color="success"
									// size="sm"
									outline
									onClick={(e) => this.handleScrape}
								>
									Scrape Artiles
									</Button>

								{/* </NavLink> */}
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>

		);
	}
}

const mapStateToProps = state => ({ ...state });
export default connect(
	mapStateToProps,
	{ scrapeArticles }
)(AppNavbar);