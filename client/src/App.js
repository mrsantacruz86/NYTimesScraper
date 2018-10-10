import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import {bindActionCreators} from 'redux';
import { asyncFetchArticles } from './redux/actions/articlesActions';

class App extends Component {

  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content articles={this.props.articles.data} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllArticles: bindActionCreators(asyncFetchArticles, dispatch)
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);