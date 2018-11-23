import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// import {
//
// } from "../actions";

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      location: "",
      expense: 0,
      studentCap: 0,
      staffCap: 0,
      startDate: new Date(),
      endDate: new Date()
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onNumberChange(e) {
    if (!isNaN(e.target.value)) {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  }

  handleStartChange(date) {
    this.setState({
      startDate: date
    });
  }

  handleEndChange(date) {
    this.setState({
      endDate: date
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log("Submit");
    console.log("name: ", this.state.name);
    console.log("description: ", this.state.description);
    console.log("location: ", this.state.location);
    console.log("expense: ", this.state.expense);
    console.log(
      "studentCap, StaffCap, :",
      this.state.studentCap,
      this.state.staffCap
    );
  }

  render() {
    // set values relevent to data base here
    return (
      <div>
        <div className="card">
          <div className="card-header">Edit Camp</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  minLength="2"
                  required
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="Description">Description</label>
                <textarea
                  type="text-area"
                  className="form-control"
                  name="description"
                  minLength="2"
                  required
                  rows="3"
                  value={this.state.description}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group mt-4">
                <span className="mr-3">
                  Start Date{" "}
                  <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleStartChange}
                  />
                </span>
                <span className="mr-3">
                  End Date{" "}
                  <DatePicker
                    selected={this.state.endDate}
                    onChange={this.handleEndChange}
                  />
                </span>
              </div>

              <div className="form-group">
                <label htmlFor="Location">Location</label>
                <textarea
                  type="text-area"
                  className="form-control"
                  name="location"
                  minLength="2"
                  required
                  rows="2"
                  value={this.state.location}
                  onChange={this.onChange}
                />
              </div>

              <div className="form-group">
                <div className="row">
                  <div className="col-sm-3">
                    <label htmlFor="expense">Expense</label>
                    <input
                      className="form-control mr-2"
                      type="text"
                      name="expense"
                      value={this.state.expense}
                      onChange={this.onNumberChange}
                    />
                  </div>
                  <div className="col-sm-3">
                    <label>Student Capacity</label>
                    <input
                      className="form-control mr-2"
                      type="text"
                      name="studentCap"
                      value={this.state.studentCap}
                      onChange={this.onNumberChange}
                    />
                  </div>
                  <div className="col-sm-3">
                    <label>Staff Capacity</label>
                    <input
                      className="form-control mr-2"
                      type="text"
                      name="staffCap"
                      value={this.state.staffCap}
                      onChange={this.onNumberChange}
                    />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>
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
)(Edit);
