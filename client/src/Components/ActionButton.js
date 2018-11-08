import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncSaveArticle } from '../redux/actions/articlesActions';


class ActionButton extends Component {

  render() {
    const {text, stl, articleId} = this.props;

    return (
      <button
        type="button"
        className={`btn btn-sm btn-${stl} btn-${text.toLowerCase()}`}
        onClick={() => this.props.onSaveArticle(articleId)}
      >
        {this.props.text}
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveArticle: (id) => {
      return () => {
        console.log("Save action Fired");
        // return (asyncSaveArticle(id));
        // const action = { type: "INPUT_CHANGE", text: e.target.value}
        return dispatch(asyncSaveArticle(id));
      };
    }
  };
};

export default connect(mapDispatchToProps)(ActionButton);