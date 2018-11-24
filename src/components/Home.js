import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Announcement from "./parts/Announcement";

const campId = 1;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aName: "",
      description: "",
      isPublic: true,
      annList: null
    };

    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    this.fetchAnnList();
  }

  fetchAnnList() {
    var data = {
        campId: campId
    }
    fetch('http://localhost:5000/getAnnouncement', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {return response.json()})
    .then(data => {
      console.log(data[0])
      this.setState({
        annList: data[0].reverse(),
      })
    })
  }

  onRemove(announcementID) {
    var data = {
        campId: campId,
        announcementID: announcementID
    }
    fetch('http://localhost:5000/deleteAnnouncement', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {
      this.fetchAnnList();
    })
  }

  onSubmit(e) {
    e.preventDefault();
    console.log("Submited");
    console.log("aName: ", this.state.aName);
    console.log("description: ", this.state.description);
    console.log("isPublic: ", this.state.isPublic);

    var data = {
        campId: campId,
        aName: this.state.aName,
        description: this.state.description,
        isPublic: this.state.isPublic
    }
    fetch('http://localhost:5000/addAnnouncement', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(response => {
      this.fetchAnnList();
      this.setState({
        aName: "",
        description: "",
        isPublic: true
      })
    })

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
  // dummy for anoucement list = [{name: , timeStamp: , text: }, ...]
  // comment and like are optional.
  render() {
    if(this.state.annList){
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
          <Announcement announcementList={this.state.annList} onRemove={this.onRemove} />
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
)(Home);
