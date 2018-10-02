import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { thunkFetchArticles } from './redux/actions/articlesActions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(thunkFetchArticles);
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
  // console.log("Log State:\n", state);
  return {
    articles: state.articles
  };
};

// const mapDispatchToProps = (dispatch) => {
//   console.log("mapDispatchToProps");
//   return {
//     onFetchArticles: (data) => {
//       const action = {
//         type: "FETCH_ARTICLES",
//         data: data
//       };
//       dispatch(action);
//     }
//   }
// }

export default connect(mapStateToProps, /*mapDispatchToProps*/)(App);