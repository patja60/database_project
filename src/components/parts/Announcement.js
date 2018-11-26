import React, { Component } from "react";

export default ({ announcementList, onRemove }) => (
  <div className="mt-3">
    {announcementList.map((announcement, index) => (
      <div key={index} className="card mb-2 bg-light">
        <div className="card-body">
          <div className="row">
            <div className="col-sm">
              <h5 className="card-title">{announcement.AnnouncementName}</h5>
            </div>
            <div className="col-sm">
              <button
                onClick={() => onRemove(announcement.AnnouncementID)}
                className="btn btn-danger float-right"
              >
                Remove
              </button>
            </div>
          </div>

          <div className="card-subtitle text-muted mb-3">
            {announcement.timestamp.slice(0,10)}
          </div>
          <p className="card-text">{announcement.Description}</p>
          <div className="row offset-sm-3 col-sm-6">
            <div className="col-sm-6">
              <button className="btn btn-outline-success btn-block">
                LIKE
              </button>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-outline-success btn-block">
                COMMENTS
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);
