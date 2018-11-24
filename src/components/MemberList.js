import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

// import {
//
// } from "../actions";

import MemberHead from "./parts/MemberHead";
import Members from "./parts/Members";

const campId = 1;
class MemberList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      memberList: null,
      campMember: 0
    };
  }

  componentWillMount() {
    this.fetchMemberList();
    this.fetchCampMemberTotal();
  }

  fetchMemberList() {
    var data = {
        campId: campId
    }
    fetch('http://localhost:5000/getMemberList', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {return response.json()})
    .then(data => {
      this.setState({
        memberList: data[0]
      })
    })
  }

  fetchCampMemberTotal() {
    var data = {
        campId: campId
    }
    fetch('http://localhost:5000/getCampMemberTotal', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {return response.json()})
    .then(data => {
      this.setState({
        campMember: data[0][0]['count(*)']
      })
    })
  }

  render() {
    if(this.state.memberList){
      return (
        <div>
          <div className="offset-sm-1 col-sm-10">
            <MemberHead total={this.state.campMember} />
            <Members memberList={this.state.memberList} />
          </div>
        </div>
      );
    }else{
      return (
        <h1>Loading</h1>
      )
    }
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  {}
)(MemberList);
