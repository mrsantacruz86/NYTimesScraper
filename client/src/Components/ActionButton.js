import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncSaveArticle } from '../redux/actions/articlesActions';
import { bindActionCreators } from 'redux';


class ActionButton extends Component {

  render() {
    const text = this.props.text;
    const stl = this.props.stl;

    return (
      <button
        type="button"
        className={`btn btn-sm btn-${stl} btn-${text.toLowerCase()}`}
        // onClick={this.props.onSaveArticle(this.props._id)}
        onClick={this.props.onSaveArticle()}
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
        return bindActionCreators(asyncSaveArticle(id), dispatch);
        // const action = { type: "INPUT_CHANGE", text: e.target.value}
        // return dispatch(articleSaved());
      };
    }
  };
};

export default connect(mapDispatchToProps)(ActionButton);