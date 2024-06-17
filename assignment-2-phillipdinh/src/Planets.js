import React, { useState, useEffect } from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

import NotFound from "./NotFound";
import planetsData from "./data/planets.json";

function PlanetsInfo() {
  return (
    <>
      <h1>Planets Page</h1>
      <h4>Discover Star Wars Planets and their information</h4>
    </>
  );
}

function Planet() {
  const { planet } = useParams();
  const planetData = planetsData[planet];
  return planetData ? (
    <>
      <h1>{planetData.name}</h1>
      <p>
        <strong>Rotation Period: </strong>
        {planetData.rotation_period}
      </p>
      <p>
        <strong>Orbital Period: </strong>
        {planetData.orbital_period}
      </p>
      <p>
        <strong>Diameter: </strong>
        {planetData.diameter}
      </p>
      <p>
        <strong>Gravity: </strong>
        {planetData.gravity}
      </p>
      <p>
        <strong>Terrain: </strong>
        {planetData.terrain}
      </p>
      <p>
        <strong>Surface Water: </strong>
        {planetData.surface_water}
      </p>
      <p>
        <strong>Population: </strong>
        {planetData.population}
      </p>
      <p>
        <strong>Residents: </strong>
      </p>
      <ul>
        {planetData.residents.map((residents) => (
          <li key={residents}>
            <Link to={residents}>{residents}</Link>
          </li>
        ))}
      </ul>
      <p>
        <strong>Films: </strong>
      </p>
      <ul>
        {planetData.films.map((film) => (
          <li key={film}>
            <Link to={film}>{film}</Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <NotFound />
  );
}
function Planets() {
  const [planets, setPlanets] = useState({});

  useEffect(() => {
    setPlanets(planetsData);
  }, []);

  return (
    <>
      <ul className="side-bar">
        {Object.entries(planets).map(([key, value]) => (
          <li key={key}>
            <NavLink className="side-bar-link" to={`/planets/${key}`}>
              {value.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="current">
        <Outlet />
      </div>
    </>
  );
}

export { Planets, Planet, PlanetsInfo };
