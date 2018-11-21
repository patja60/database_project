import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'redux';
import { Redirect } from "react-router-dom";

// import {
//
// } from "../actions";

class MemberList extends Component {

  //dummy for memberList = [{username: , name: , position: }, ...]
  render() {
    return (
      <div>
        <h1> Camp Name:</h1>
        <h3> member:</h3>
        <button>back</button>
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
)(MemberList);
