import React, { Component } from "react";

export default ({ typeList, currentId, onCampTypeChange }) => (
  <div className="dropdown">
    <button
      className="btn btn-vidva dropdown-toggle btn-block"
      type="button"
      data-toggle="dropdown"
    >
      {typeList[currentId-1].TypeName}
    </button>
    <div className="dropdown-menu">
      {typeList.map((type) => (
        <div
          style={{ cursor: "pointer" }}
          onClick={() => onCampTypeChange(type.TypeID)}
          key={type.TypeID}
          className="dropdown-item"
        >
          {type.TypeName}
        </div>
      ))}
    </div>
  </div>
);
