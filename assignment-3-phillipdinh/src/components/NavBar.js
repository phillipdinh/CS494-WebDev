/** @jsxImportSource @emotion/react */

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMeteor } from "@fortawesome/free-solid-svg-icons";

import { css } from "@emotion/react";

function Navbar(props) {
  const styles = css`
    display: flex;
    justify-content: flex-start;
    background-color: thistle;
    h1 {
      margin: 6px 6px 6px 16px;
      font-size: 36px;
      color: #222222;
    }
    div {
      margin-top: 12px;
    }
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;
      margin: 0 0 0 auto;
      padding: 0;

      li {
        margin: 0 10px;
      }
    }
  `;

  return (
    <>
      <nav css={styles}>
        <h1>Weather</h1>
        <div>
          <FontAwesomeIcon icon={faMeteor} size={"2xl"} />
        </div>
        <ul>
          <li>{props.children}</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
