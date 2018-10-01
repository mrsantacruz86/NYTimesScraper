import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';
import API from './js/API';
// import actions from './redux/actions';

class App extends Component {

  componentDidMount() {
    API.getArticles()
    .then(response => {
      this.props.onFetchArticles(response.data);
    })
    .catch(err => console.log(err));
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
  console.log("Log State:\n", state);
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps");
  return {
    onFetchArticles: (data) => {
      const action = {
        type: "SHOW_ARTICLES",
        data: data
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);