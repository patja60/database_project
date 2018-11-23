import React, { Component } from "react";

export default ({ total, memberList }) => (
  <div>
    <hr />
    <strong>Members</strong>
    <span className="float-right">Total: {total}</span>
    <hr />
  </div>
);
