/** @jsxImportSource @emotion/react */

import { Route, Routes, Navigate } from "react-router-dom";
import { Global, css } from "@emotion/react";

import Search from "./pages/Search";
const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;700&display=swap");
  body {
    font-family: "Manrope", sans-serif;
    margin: 0;
  }
`;
function App() {
  return (
    <>
      <Global styles={globalStyles} />

      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/" element={<Navigate to="/search" />} />
      </Routes>
    </>
  );
}

export default App;
