import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { thunkFetchArticles } from './redux/actions/articlesActions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(thunkFetchArticles());
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



export default connect(mapStateToProps)(App);