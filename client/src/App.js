import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';
// import API from './js/API';


class App extends Component {

  componentDidMount() {
    this.props.onFetchArticles();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content articles={this.props.articles}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log ("Log State:\n", state);
  console.log ("Log Props:\n", this.props.articles);
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(App);