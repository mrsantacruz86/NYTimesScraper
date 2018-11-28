import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
					<NavbarBrand tag={Link} to="/">
						<i className="far fa-newspaper"></i> NEWS SCRAPER
					</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							<NavItem>
								<NavLink tag={Link} to="/" activeClassName="active">
									Home
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink tag={Link} to="/saved" activeClassName="active">
									Saved Articles
								</NavLink>
							</NavItem>
							<Button
								color="success"
								outline
								onClick={this.handleScrape}
							>
								Scrape Artiles
							</Button>
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