import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { Link } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const campId = 1;
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
      endDate: new Date(),
      fetchFinish: false
    };

    this.handleStartChange = this.handleStartChange.bind(this);
    this.handleEndChange = this.handleEndChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onNumberChange = this.onNumberChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.fetchCampInfo();
  }

  fetchCampInfo() {
    var data = {
        campId: campId
    }
    fetch('http://localhost:5000/getCampInfo', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {return response.json()})
    .then(data => {
      console.log(data[0])
      const campInfo = data[0][0];
      this.setState({
        name: campInfo.Name,
        description: campInfo.Description,
        location: campInfo.Location,
        expense: campInfo.Expense,
        studentCap: campInfo.SCap,
        staffCap: campInfo.UCap,
        startDate: new Date(campInfo.StartDate),
        endDate: new Date(campInfo.EndDate),
        fetchFinish: true
      })
    })
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
    function formatDate(date) {
      var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;

      return [year, month, day].join('-');
    }
    var data = {
        campId: campId,
        name: this.state.name,
        description: this.state.description,
        startDate: formatDate(this.state.startDate),
        endDate: formatDate(this.state.endDate),
        location: this.state.location,
        expense: this.state.expense,
        studentCap: this.state.studentCap,
        staffCap: this.state.staffCap,
    }
    fetch('http://localhost:5000/updateCampInfo', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {
      console.log(response)
      this.fetchCampInfo();
    })
  }

  render() {
    if(this.state.fetchFinish){
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
    }else{
      return(
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
)(Edit);
