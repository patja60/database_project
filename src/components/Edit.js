import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'redux';
import { Redirect } from "react-router-dom";

// import {
//
// } from "../actions";

class Edit extends Component {
  render() {
    return (
      <div>
        <h1> Camp Name:</h1>
        <h3> Edit:</h3>
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
)(Edit);
