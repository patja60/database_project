import React, { Component } from "react";

export default ({ memberList }) => (
  <ul className="list-group list-group-flush">
    {memberList.map((member, index) => (
      <li key={index} className="list-group-item bg-light">
        <div className="row">
          <div className="col-sm-1">
            <i className="fas fa-user-circle" style={{ fontSize: "4em" }} />
          </div>
          <div className="col-sm">
            <strong>{member.nickName}</strong>
            <div>
              {member.firstName} {member.lastName}
            </div>
            <div>:- {member.position}</div>
          </div>
          <button className="btn btn-secondary btn-sm">
            <i className="fas fa-arrow-circle-right" /> More Details
          </button>
        </div>
      </li>
    ))}
  </ul>
);
