import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { getArticles } from './actions/articlesActions';


class App extends Component {

  componentDidMount() {
    this.props.getArticles();
  }

  render() {

    const Saved = () => (
      <Content data={this.props.articles.data.filter(articles => articles.saved)} />
    );
    const Unsaved = () => (
      <Content data={this.props.articles.data.filter(articles => !articles.saved)} />
    );
    const NoRoute = () => (
      <h1>404: Page Not Found</h1>
    );

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Unsaved} />
            <Route exact path="/saved" component={Saved} />
            <Route component={NoRoute} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

export default connect(mapStateToProps, { getArticles })(App);