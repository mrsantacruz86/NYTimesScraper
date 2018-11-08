import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
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
        <Content
          articles={this.props.articles.data}
          filter={this.props.articles.filterSaved}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllArticles: () => {
      return dispatch(asyncFetchArticles());
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);