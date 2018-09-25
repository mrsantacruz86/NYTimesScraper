import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Content from './Components/Content';
import './App.css';
// import articleList from './js/dummyData';


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

const mapStateToProps = (state) => {
  console.log("mapStateToProps");
  return {
    articles: state.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("mapDispatchToProps");
  return {
    onIncrementClick: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    onDecrementClick: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);