import React, { useState, useEffect } from "react";

import { Link, NavLink, useParams, Outlet } from "react-router-dom";
import NotFound from "./NotFound";
import filmsData from "./data/films.json";

function FilmsInfo() {
  return (
    <>
      <h1>Films Page</h1>
      <h4>Discover Star Wars Films and their information</h4>
    </>
  );
}

function Film() {
  const { film } = useParams();
  const filmData = filmsData[film];
  return filmData ? (
    <>
      <h1>{filmData.title}</h1>
      <p>
        <strong>Episode ID: </strong>
        {filmData.episode_id}
      </p>
      <p>
        <strong>Opening Crawl: </strong>
        {filmData.opening_crawl}
      </p>
      <p>
        <strong>Director: </strong>
        {filmData.director}
      </p>
      <p>
        <strong>Producer: </strong>
        {filmData.producer}
      </p>
      <p>
        <strong>Release Date: </strong>
        {filmData.release_date}
      </p>

      <p>
        <strong>Characters: </strong>
      </p>
      <ul>
        {filmData.characters.map((character) => (
          <li key={character}>
            <Link to={character}>{character}</Link>
          </li>
        ))}
      </ul>

      <p>
        <strong>Planets: </strong>
      </p>
      <ul>
        {filmData.planets.map((planet) => (
          <li key={planet}>
            <Link to={planet}>{planet}</Link>
          </li>
        ))}
      </ul>
    </>
  ) : (
    <NotFound />
  );
}

function Films() {
  const [films, setFilms] = useState({});

  useEffect(() => {
    setFilms(filmsData);
  }, []);

  return (
    <>
      <ul className="side-bar">
        {Object.entries(films).map(([key, value]) => (
          <li key={key}>
            <NavLink className="side-bar-link" to={`/films/${key}`}>
              {value.title}
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

export { Films, Film, FilmsInfo };
