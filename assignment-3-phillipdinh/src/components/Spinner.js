/*
 * Spinner derived from https://tobiasahlin.com/spinkit/.
 */

import React from "react";

import "./Spinner.css";

function Spinner() {
  return (
    <div class="spinner">
      <div class="rect1"></div>
      <div class="rect2"></div>
      <div class="rect3"></div>
      <div class="rect4"></div>
      <div class="rect5"></div>
    </div>
  );
}

export default Spinner;
