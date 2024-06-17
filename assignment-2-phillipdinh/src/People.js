import React, { useState, useEffect } from "react";

import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import NotFound from "./NotFound";
import peopleData from "./data/people.json";

function PeopleInfo() {
  return (
    <>
      <h1>People Page</h1>
      <h4>Discover Star Wars Characters and their information</h4>
    </>
  );
}
function Person() {
  const { person } = useParams();
  const personData = peopleData[person];
  return personData ? (
    <>
      <h1>{personData.name}</h1>
      <p>
        <strong>Mass: </strong>
        {personData.mass}
      </p>
      <p>
        <strong>Hair Color: </strong>
        {personData.hair_color}
      </p>
      <p>
        <strong>Skin Color: </strong>
        {personData.skin_color}
      </p>
      <p>
        <strong>Eye Color: </strong>
        {personData.eye_color}
      </p>
      <p>
        <strong>Birth Year: </strong>
        {personData.birth_year}
      </p>
      <p>
        <strong>Gender: </strong>
        {personData.gender}
      </p>
      <div className="home-world">
        <p>
          <strong>Home world: </strong>
        </p>
        <Link className="home-link" to={personData.homeworld}>
          {personData.homeworld}
        </Link>
      </div>

      <p>
        <strong>Films: </strong>
      </p>
      <ul>
        {personData.films.map((film) => (
          <li key={film}>
            <Link to={film}>{film}</Link>
          </li>
        ))}
      </ul>
    </>
  )  : <NotFound />;
}

function People() {
  const [people, setPeople] = useState({});

  useEffect(() => {
    setPeople(peopleData);
  }, []);

  return (
    <>
      <ul className="side-bar">
        {Object.entries(people).map(([key, value]) => (
          <li key={key}>
            <NavLink className="side-bar-link" to={`/people/${key}`}>
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
export { People, Person, PeopleInfo };
