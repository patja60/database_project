import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

// import {
//
// } from "../actions";

import CampBar from "./parts/CampBar";
import Announcement from "./parts/Announcement";

import annList from "./dummy";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aName: "",
      description: ""
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onAdd() {
    console.log("Add");
  }

  onDelete() {
    console.log("Delete");
  }

  onRemove() {
    console.log("Remove");
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // public and private ??

  // dummy for anoucement list = [{name: , timeStamp: , text: }, ...]
  // comment and like are optional.
  render() {
    const dummy1 = dummy1;
    return (
      <div>
        <CampBar CampName="Larn Gear" />
        <div className="row">
          <div className="col-sm-6">
            <Link to="/edit" className="btn btn-vidva btn-block">
              <i class="far fa-edit" /> Edit
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/memberList" className="btn btn-vidva btn-block">
              <i class="fas fa-list-ul" /> Member List
            </Link>
          </div>
        </div>

        <div className="card mt-3 bg-light">
          <div className="card-header text-white bg-secondary">
            <strong>Announcement</strong>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label for="message">Announcement Name</label>
              <input
                className="form-control"
                type="text"
                name="aName"
                onChange={this.onChange}
                value={this.state.aName}
              />
            </div>
            <div className="form-group">
              <label for="message">Description</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                name="description"
                onChange={this.onChange}
                value={this.state.description}
              />
            </div>
            <span>Public: </span>
            <label>
              <input
                className="ml-3"
                type="radio"
                name="editList"
                value="always"
              />{" "}
              Yes
            </label>
            <label>
              <input
                className="ml-2"
                type="radio"
                name="editList"
                value="never"
              />{" "}
              No
            </label>
            <button
              onClick={this.onAdd}
              className="btn btn-primary float-right px-5"
            >
              Add
            </button>
          </div>
        </div>
        <Announcement announcementList={annList} onRemove={this.onRemove} />
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
)(Home);
