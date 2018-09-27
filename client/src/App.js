import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';
import API from './js/API';


class App extends Component {
  componentDidMount() {
    this.props.onFetchArticles();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content />
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
    onFetchArticles: () => {
      API.getArticles()
        .then(response => {
          const action = {
            type: "SHOW_ARTICLES",
            data: response.data
          };
          dispatch(action);
        });
    },
    onDecrementClick: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);