import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import "./Navbar.css";
import Home from "./Home";
import NotFound from "./NotFound";
import { People, Person, PeopleInfo } from "./People";
import { Planets, Planet, PlanetsInfo } from "./Planets";
import { Films, Film, FilmsInfo } from "./Films";

function Navbar() {
  return (
    <>
      <div className="header">
        <h1 className="site-title">Star Wars</h1>
        <ul className="navbar">
          <li>
            <NavLink className="navbar-link" to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink className="navbar-link" to="/people">
              People
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/planets">
              Planets
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/films">
              Films
            </NavLink>
          </li>
        </ul>
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/people" element={<People />}>
          <Route index element={<PeopleInfo />} />
          <Route path=":person" element={<Person />} />
        </Route>

        <Route path="/planets" element={<Planets />}>
          <Route index element={<PlanetsInfo />} />
          <Route path=":planet" element={<Planet />} />
        </Route>

        <Route path="/films" element={<Films />}>
          <Route index element={<FilmsInfo />} />
          <Route path=":film" element={<Film />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default Navbar;
