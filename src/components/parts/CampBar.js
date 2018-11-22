import React, { Component } from "react";

export default ({ CampName }) => (
  <div className="display-4 bg-vidva text-center text-white p-3 w-auto mb-3">
    {CampName.toUpperCase()} CAMP
  </div>
);
