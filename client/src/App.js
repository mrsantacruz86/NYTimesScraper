import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showArticles, saveArticle} from './actions';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';
import API from './js/API';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };

  }

  componentDidMount() {
    API.getArticles()
      .then(response => { this.setState({ articles: response.data });});
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content articles={this.state.articles}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  return {
    articles: state
  };
};

export default connect(mapStateToProps, { showArticles, saveArticle })(App);