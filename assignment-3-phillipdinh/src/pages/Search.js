/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Spinner from "../components/Spinner";
import ErrorContainer from "../components/ErrorContainer";
import useWeatherSearch from "../hooks/useWeatherSearch";
import Forecast from "../components/Forecast";
import NavBar from "../components/NavBar";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const ForecastContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin: 6px;
`;

const ForecastCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  margin: 10px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  flex-basis: 60%;
`;

const SearchQuery = styled.h2`
  margin-left: 16px;
`;
const Input = styled.input`
  font-size: 24px;
  color: dimgray;
  border-radius: 4px;
  border-color: whitesmoke;
  margin-top: 6px;
  margin-left: 16px;
  padding: 6px;

  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s all;

  &:hover {
    background-color: rgba(255, 255, 255, 0.45);
    box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  }

  &:click {
  }
`;
const Button = styled.button`
  font-size: 24px;
  border-radius: 4px;
  color: #f0f8ff;
  background-color: thistle;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  &:hover {
    color: slategray;
  }
`;
function Search({ query }) {
  const styles = css`
    background-color: #f0f8ff;
  `;
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputQuery, setInputQuery] = useState(searchParams.get("q") || "");
  const [forecasts, loading, error] = useWeatherSearch(searchParams.get("q"));

  return (
    <div css={styles}>
      <NavBar>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSearchParams({ q: inputQuery });
          }}
        >
          <Input
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder="Search City"
          />
          <Button type="submit">
            <FontAwesomeIcon icon={faMagnifyingGlass} size={"lg"} />
          </Button>
        </form>
      </NavBar>
      {searchParams.toString() !== "" && (
        <SearchQuery>Search query: {searchParams.get("q")}</SearchQuery>
      )}
      {error && <ErrorContainer>An error occured...</ErrorContainer>}
      {loading ? (
        <Spinner />
      ) : (
        <ForecastContainer>
          {forecasts.map((forecast) => (
            <ForecastCard key={forecast.dt}>
              <Forecast data={forecast} />
            </ForecastCard>
          ))}
        </ForecastContainer>
      )}
    </div>
  );
}
export default Search;
