import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

// import {
//
// } from "../actions";

class MemberList extends Component {
  //dummy for memberList = [{username: , name: , position: }, ...]
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <Link to="/" className="btn btn-link">
              <i className="fas fa-arrow-circle-left" /> Back to Camp
            </Link>
          </div>
        </div>
        <h1> Camp Name:</h1>
        <h3> member:</h3>
        <button>back</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(MemberList);
