/** @jsxImportSource @emotion/react */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

import styled from "@emotion/styled";

const ForecastData = styled.p`
  font-size: 24px;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 4px;
  color: ${(props) => props.color};
`;

const ForecastDiv = styled.div`
  display: flex; 
  flex-direction: ${(props) =>
    props.vertical
      ? "column"
      : "row"};
  justify-content: center;
  align-items: center;
  margin-left: 32px;
  margin-right: ${(props) => (props.auto ? "auto" : "32px")};
`;
function Forecast(props) {
  console.log(props);

  const date = new Date(props.data.dt_txt);

  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  console.log(props.data.main.temp_min);
  const lowNum = props.data.main.temp_min.toString();
  const low = parseInt(lowNum, 10).toString();

  const highNum = props.data.main.temp_max.toString();
  const high = parseInt(highNum, 10).toString();

  return (
    <>
      <ForecastDiv vertical>
        <ForecastData>
          {month} {day}
        </ForecastData>
        <ForecastData bold>{time}</ForecastData>
      </ForecastDiv>

      <ForecastDiv vertical auto>
        <ForecastData color="#DC143C">{high} °F</ForecastData>
        <ForecastData color="#00BFFF">{low} °F</ForecastData>
      </ForecastDiv>

      <ForecastDiv>
        <img
          src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
          alt=""
        ></img>

        <ForecastData>{props.data.weather[0].description}</ForecastData>
      </ForecastDiv>
      <ForecastDiv>
        <FontAwesomeIcon icon={faDroplet} size={"lg"} />
        <ForecastData>{props.data.pop} %</ForecastData>
      </ForecastDiv>
    </>
  );
}

export default Forecast;
