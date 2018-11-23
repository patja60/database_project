import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

// import {
//
// } from "../actions";

import MemberHead from "./parts/MemberHead";
import Members from "./parts/Members";

import { memberList } from "./dummy";

class MemberList extends Component {
  //dummy for memberList = [{username: , name: , position: }, ...]
  render() {
    return (
      <div>
        <div className="offset-sm-1 col-sm-10">
          <MemberHead total={120} />
          <Members memberList={memberList} />
        </div>
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
