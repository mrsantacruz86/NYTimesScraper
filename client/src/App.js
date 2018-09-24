import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';
// import articleList from './js/dummyData';
import API from './js/API';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      saved: false,
      filterList: []
    };

  }

  componentDidMount() {
    window.location.pathname === "/saved" ?
      this.setState({ saved: true }) : this.setState({ saved: false });

    this.loadArticles();
  }

  filterList(list) {
    return list.filter(item => item.saved === this.state.saved);
  }

  loadArticles() {
    API.getArticles()
      .then(res => this.setState({ articles: res.data }))
      .catch(err => console.log(err));

  }

  handleButtonEvent(action, id) {

    this.loadArticles();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Content articles={this.state.articles}
        //handleButtonEvent={this.handleButtonEvent}
        />
      </div>
    );
  }
}

export default App;
