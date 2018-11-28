import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { getArticles } from './redux/actions/articlesActions';


class App extends Component {
  
  componentDidMount() {
    this.props.getArticles();
  }
  
  render() {
    const Saved = () => <Content data={this.props.articles.savedArticles} />;
    const Unsaved = () => <Content data={this.props.articles.unsavedArticles} />;
    // console.log(this.props.savedArticles);
    // console.log(this.props.unsavedArticles);
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route exact path="/" component={Unsaved} />
            <Route exact path="/saved" component={Saved} />
            <Route component={<h1>404: Page Not Found</h1>} />
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