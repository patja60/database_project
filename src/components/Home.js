import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'redux';
import { Redirect } from "react-router-dom";

// import {
//
// } from "../actions";

class Home extends Component {

  onAdd() {
    //
  }

  onDelete() {
    //
  }

  // public and private ??

  // dummy for anoucement list = [{name: , timeStamp: , text: }, ...]
  // comment and like are optional.
  render() {
    return (
      <div>
        <h1> Camp Name:</h1>
        <button>Edit</button>
        <button>Member List</button>
        <h3> Annoucement:</h3>
        <input type="text" placeholder="write me" />
        <button onClick={this.onAdd.bind(this)}>Add</button>

        <h3> Annoucement List:</h3>
        <h5> display something</h5>
        <button onClick={this.onDelete.bind(this)}>Delete</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default connect(
  mapStateToProps,
  {}
)(Home);
