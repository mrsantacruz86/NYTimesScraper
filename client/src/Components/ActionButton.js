import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncSaveArticle } from '../redux/actions/articlesActions';


class ActionButton extends Component {

  render() {
    const text = this.props.text;
    const stl = this.props.stl;

    return (
      <button
        type="button"
        className={`btn btn-sm btn-${stl} btn-${text.toLowerCase()}`}
        // onClick={this.props.onSaveArticle(this.props._id)}
        onClick={() => this.props.onSaveArticle()}
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
        return dispatch(asyncSaveArticle(id));
        // const action = { type: "INPUT_CHANGE", text: e.target.value}
        // return dispatch(articleSaved());
      };
    }
  };
};

export default connect(mapDispatchToProps)(ActionButton);