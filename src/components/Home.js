import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

// import {
//
// } from "../actions";

import Announcement from "./parts/Announcement";

import annList from "./dummy";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aName: "",
      description: "",
      isPublic: true
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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

  onSubmit(e) {
    e.preventDefault();
    console.log("Submited");
    console.log("aName: ", this.state.aName);
    console.log("description: ", this.state.description);
    console.log("isPublic: ", this.state.isPublic);
    this.setState({
      aName: "",
      description: "",
      isPublic: true
    });
  }

  handleRadioButton(number) {
    this.setState({
      isPublic: number === 0 ? true : false
    });
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
        <div className="row">
          <div className="col-sm-6">
            <Link to="/edit" className="btn btn-vidva btn-block">
              <i className="far fa-edit" /> Edit
            </Link>
          </div>
          <div className="col-sm-6">
            <Link to="/memberList" className="btn btn-vidva btn-block">
              <i className="fas fa-list-ul" /> Member List
            </Link>
          </div>
        </div>

        <div className="card mt-3 bg-light">
          <div className="card-header text-white bg-secondary">
            <strong>Announcement</strong>
          </div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Announcement Name">Announcement Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="aName"
                  minLength="2"
                  required
                  onChange={this.onChange}
                  value={this.state.aName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  name="description"
                  minLength="2"
                  required
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
                  checked={this.state.isPublic === true}
                  onChange={() => this.handleRadioButton(0)}
                />{" "}
                Yes
              </label>
              <label>
                <input
                  className="ml-2"
                  type="radio"
                  name="editList"
                  value="never"
                  checked={this.state.isPublic === false}
                  onChange={() => this.handleRadioButton(1)}
                />{" "}
                No
              </label>
              <input
                type="submit"
                value="Add"
                className="btn btn-primary float-right px-5"
              />
            </form>
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
