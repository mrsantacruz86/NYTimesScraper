import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Content from './Components/Content';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import { Container } from 'reactstrap';
import { asyncFetchArticles } from './redux/actions/articlesActions';

class App extends Component {

  componentDidMount() {
    this.props.getAllArticles();
  }

  render() {
    const saved = () => <Content
          articles={this.props.articles.data.filter(item => item.saved)}
          filter={this.props.articles.filterSaved}
        />;
    const unsaved = () => <Content
          articles={this.props.articles.data.filter(item => !item.saved)}
          filter={this.props.articles.filterSaved}
        />;
    return (
      <Container fluid className="App">
        <Navbar />
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={unsaved} />
            <Route exact path="/unsaved" component={unsaved} />
          <Route exact path="/saved" component={saved} />
          {/* <Route component={NoMatch} /> */}
          </Switch>
        </Router>

        
      </Container>
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